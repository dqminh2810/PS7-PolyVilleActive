const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const models = require('./models/index');
const { UserService } = require('./api/people/user/UserService');
const { EventService } = require('./api/activity/events/EventService');
const { CinemaService } = require('./api/emplacement/cinemas/CinemaService');
const { RestaurantService } = require('./api/emplacement/restaurants/RestaurantService');
const { LibraryService } = require('./api/emplacement/library/LibraryService');
const { SportCenterService } = require('./api/emplacement/sportCenter/SportCenterService');
const { CityService } = require('./api/location/city/CityService');
const { CountryService } = require('./api/location/country/CountryService');


module.exports = async (cb) => {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.json({}));
  app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'));
  app.use('/api', api);
  app.use('/', (req, res) => res.status(200).json('OK server!'));
  app.use('*', (req, res) => res.status(404).end());


  const mongoURI = 'mongodb://localhost:27017/ps7';
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(()=>{
            console.log('OK');
        })
      .catch((err)=>{
          console.log(err);
      });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB!');
    // Create collections if it doesnt exist
    const collections = Object.keys(mongoose.connection.collections);
    Object.keys(models).forEach((model) => {
      if (!collections.includes(model)) {
        db.createCollection(model);
      }
    });


    // Build data-set
      const country_service = new CountryService();
      const city_service = new CityService();
      const cinema_service = new CinemaService();
      const restaurant_service = new RestaurantService();
      const library_service = new LibraryService();
      const sport_center_service = new SportCenterService();
      const event_service = new EventService();
      const user_service = new UserService();
      console.log("Loading data set...");
      return country_service.buildDataSet().then(()=>{
          return city_service.buildDataSet().then(()=>{
              return cinema_service.buildDataSet().then(()=>{
                  return restaurant_service.buildDataSet().then(()=>{
                      return library_service.buildDataSet().then(()=>{
                          return sport_center_service.buildDataSet().then(()=>{
                              return event_service.buildDataSet().then(()=>{
                                  return user_service.buildDataSet().then(()=>{
                                      console.log("Done build data set!")
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });

  const server = app.listen(process.env.PORT || 9428, () => cb && cb(server));
  return server;
};
