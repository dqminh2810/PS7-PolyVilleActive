const { Event } = require('../../../models/index');
const { ActivityService } = require('../ActivityService');
const csv = require('csv-parser');
const fs = require('fs');
const { event_dataset_csv_path } = require('./event_config');
const { CinemaService } = require('../../emplacement/cinemas/CinemaService');
const { RestaurantService } = require('../../emplacement/restaurants/RestaurantService');
const { LibraryService } = require('../../emplacement/library/LibraryService');
const { SportCenterService } = require('../../emplacement/sportCenter/SportCenterService');

class EventService {
  constructor() {
    this.service = new ActivityService(Event);
  }

  getAll() {
    return this.service.getAll();
  }

  findByTitle(title) {
    const params = { title: { $regex: new RegExp(title, 'i') } };
    return new Promise((resolve, reject) => {
      Event.findOne(params, (err, docs) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(docs);
      });
    });
  }

  findById(eventId) {
    return this.service.findById(eventId);
  }

  findByCity(city){
    return this.service.findByCity(city);
  }

  create(event) {
    return new Promise((resolve, reject) => {
      Event.create(event, (err, docs) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(docs);
      });
    });
  }

  update(event) {
    return new Promise((resolve, reject) => {
      Event.update(event, (err, docs) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(docs);
      });
    });
  }

  updateLocations(locations) {
    return new Promise((resolve, reject) => {
      Event.update(Event, (err, docs) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(docs);
      });
    });
  }

  async buildDataSet(){
      const cinemaService = new CinemaService();
      const restaurantService = new RestaurantService();
      const libraryService = new LibraryService();
      const sportCenterService = new SportCenterService();
      await Event.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });

      const events = [];
      await fs.createReadStream(event_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              events.push(row);
              const event = new Event({
                  type: row.type,
                  website: row.website,
                  language: row.language,
                  title: row.title,
                  start_date: row.start_date,
                  end_date: row.end_date,
                  price: row.price,
                  // organized_at: locations,
              });
              event.save()
                  .then((doc) => {
                      //console.log(doc);
                  })
                  .catch((err) => {
                      console.error(err);
                  });

              const locations = [];
              switch (row.type) {
                  case 'cultural':
                      libraryService.getAll()
                          .then((libraries) => {
                              const random_index = Math.floor(Math.random() * Math.floor(libraries.length));
                              Event.update(
                                  { _id: event._id },
                                  { $push: {organized_at: libraries[random_index]}},
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
                  case 'sport':
                      sportCenterService.getAll()
                          .then((sports) => {
                              const random_index = Math.floor(Math.random() * Math.floor(sports.length));
                              Event.update(
                                  { _id: event._id },
                                  { $push: {organized_at: sports[random_index]}},
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
                  case 'commercial':
                      cinemaService.getAll()
                          .then((cinemas)=>{
                              const random_index = Math.floor(Math.random() * Math.floor(cinemas.length));
                              Event.update(
                                  { _id: event._id },
                                  { $push: {organized_at: cinemas[random_index]}},
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
                      restaurantService.getAll()
                          .then((restos)=>{
                              const random_index = Math.floor(Math.random() * Math.floor(restos.length));
                              Event.update(
                                  { _id: event._id },
                                  { $push: {organized_at: restos[random_index]}},
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
                      break;
                  default:
              }
          })
          .on('end', () => {
              //console.log('CSV file successfully processed');
              // console.log(events);
          });
  }
}
module.exports = { EventService };
