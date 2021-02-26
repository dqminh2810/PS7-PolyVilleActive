const { Router } = require('express');
const EventRouter = require('./activity/events');
const CinemaRouter = require('./emplacement/cinemas');
const RestaurantRouter = require('./emplacement/restaurants');
const SportCenterRouter = require('./emplacement/sportCenter');
const LibraryRouter = require('./emplacement/library');
const CountryRouter = require('./location/country');
const CityRouter = require('./location/city');
const UserRouter = require('./people/user');

const DialogRouter = require('./dialogflow');
/*const UserRouter = require('./controller');*/

const router = new Router();

router.get('/status', (req, res) => res.status(200).json('ok'));
/* DialogFlow */
router.use('/dialog', DialogRouter);
/* Activity */
router.use('/event', EventRouter);
/* Emplacement */
router.use('/cinema', CinemaRouter);
router.use('/restaurant', RestaurantRouter);
router.use('/sportCenter', SportCenterRouter);
router.use('/library', LibraryRouter);
/* Location */
router.use('/country', CountryRouter);
router.use('/city', CityRouter);
/* People */
router.use('/user', UserRouter);

module.exports = router;
