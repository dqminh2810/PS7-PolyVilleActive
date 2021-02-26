const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('../../app/api');
const models = require('../../app/models/index');
const { UserService } = require('../../app/api/people/user/UserService');
const { EventService } = require('../../app/api/activity/events/EventService');
const { CinemaService } = require('../../app/api/emplacement/cinemas/CinemaService');
const { RestaurantService } = require('../../app/api/emplacement/restaurants/RestaurantService');
const { LibraryService } = require('../../app/api/emplacement/library/LibraryService');
const { SportCenterService } = require('../../app/api/emplacement/sportCenter/SportCenterService');
const { CityService } = require('../../app/api/location/city/CityService');
const { CountryService } = require('../../app/api/location/country/CountryService');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json({}));
app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'));
app.use('/api', api);
app.use('/test', (req, res) => res.status(200).json('OK test'));
app.use('*', (req, res) => res.status(404).end());

/* Connect to mongo database */
const mongoURI = 'mongodb://localhost:27017/test_http_request';


const connection = mongoose.createConnection(mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', (error) => {
    console.warn('Error : ',error);
});
db.once('open', () => {
    console.log('Connected to mongoDB for http request testing');
});

app.listen(process.env.PORT || 9428);

//Called hooks which runs before something.
before(async () => {
    // Create collections if it doesnt exist
    const collections = Object.keys(mongoose.connection.collections);
    Object.keys(models).forEach(model => {
        if (!collections.includes(model)) {
            db.createCollection(model)
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
    await country_service.buildDataSet().then(()=>{
        return city_service.buildDataSet().then(()=>{
            return cinema_service.buildDataSet().then(()=>{
                return restaurant_service.buildDataSet().then(()=>{
                    return library_service.buildDataSet().then(()=>{
                        return sport_center_service.buildDataSet().then(()=>{
                            return event_service.buildDataSet().then(()=>{
                                return user_service.buildDataSet().then(()=>{
                                    console.log("Done build data set!");
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
module.exports = { app };
