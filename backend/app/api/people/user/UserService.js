const { User } = require('../../../models/index');
const { PeopleService } = require('../PeopleService');
const csv = require('csv-parser');
const fs = require('fs');
const { user_dataset_csv_path } = require('./config/user_config');
const { CityService } = require('../../location/city/CityService');
const { EventService } = require('../../activity/events/EventService');
class UserService {
  constructor() {
    this.service = new PeopleService(User);
  }

  getAll() {
    return this.service.getAll();
  }

  findByName(_name) {
    return this.service.findByName(_name);
  }

  findById(userId) {
    return this.service.findById(userId);
  }

  findByCity(city){
    return this.service.findByCity(city);
  }

  findByCountry(country){
    return this.service.findByCountry(country);
  }


  async loginUser (req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res.status(401).json({ error: "Login failed! Check authentication credentials" });
      }
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err });
    }
  };

  async registerNewUser (req, res) {
    const {
      name,
      email,
      password
      //to do add new attributes
    } = req.body;
    try {
      let user = new User({
        name,
        email,
        password
      });

      let data = await user.save();
      const token = await user.generateAuthToken();
      res.status(201).json({ data, token });
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err });
    }
  };

  async getUserDetails (req, res) {
    await res.json(req.userData);
  };

  async buildDataSet(){
      const city_service = new CityService();
      const event_service = new EventService();
      await User.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });

      const users = [];
      //console.log(user_dataset_csv_path);

      await fs.createReadStream(user_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              users.push(row);
              const user = new User({
                  name: row.name,
                  email: row.email,
                  password: row.password,
              });
              user.save()
                  .then((doc) => {
                      //console.log(doc);
                  })
                  .catch((err) => {
                      console.error(err);
                  });

              // live_in attribute
              city_service.findByName(row.city)
                  .then((city)=>{
                      User.update(
                          { _id: user._id },
                          { live_in: city},
                          function (error, success) {
                              if (error) {
                                  console.log(error + " resto");
                              } else {
                                  //console.log(success);
                              }
                          });
                  })
                  .catch((err)=>{
                      console.log(err);
                  });

              // participate_to attribute
              event_service.getAll()
                  .then((events)=>{
                      const random_index = Math.floor(Math.random() * Math.floor(events.length));
                      User.update(
                          { _id: user._id },
                          { $push: {participate_to: events[random_index]}},
                          function (error, success) {
                              if (error) {
                                  console.log(error + " cine");
                              } else {
                                  //console.log(success);
                              }
                          });
                  })
                  .catch((err)=>{
                      console.log(err);
                  });

              // details_user
              switch (row.type) {
                  case 'organizer':
                      event_service.getAll()
                          .then((events)=>{
                              const random_index = Math.floor(Math.random() * Math.floor(events.length));
                              User.update(
                                  { _id: user._id },
                                  { $set:{ details_user: { organize: [events[random_index]] }}},

                                  function (error, success) {
                                      if (error) {
                                          console.log(error + " cine");
                                      } else {
                                          //console.log(success);
                                      }
                                  });
                          })
                          .catch((err)=>{
                              console.log(err);
                          });
                      break;
                  case 'visitor':
                      event_service.getAll()
                          .then((events)=>{
                              const random_index = Math.floor(Math.random() * Math.floor(events.length));
                              User.update(
                                  { _id: user._id },
                                  { $set:{ details_user: { preferences: [events[random_index]] }}},
                                  function (error, success) {
                                      if (error) {
                                          console.log(error + " cine");
                                      } else {
                                          //console.log(success);
                                      }
                                  });
                          })
                          .catch((err)=>{
                              console.log(err);
                          });
                      break;
                  default:
                      break;
              }
          })
          .on('end', () => {
              // console.log(cinemas);
              this.getAll()
                  .then((users)=>{
                      let friend = users[users.length-1];
                      users.forEach((user)=>{
                          User.update(
                              { _id: user._id },
                              { $push: {friend_of: friend}},
                              function (error, success) {
                                  if (error) {
                                      //console.log(error);
                                  } else {
                                      //console.log(success);
                                  }
                              });
                      })
                  })
                  .catch((err)=>{
                      console.log(err);
                  });
          });
  }
}

module.exports = { UserService };
