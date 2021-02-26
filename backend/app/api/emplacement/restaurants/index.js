const { Router } = require('express');
const { Restaurant } = require('../../../models/index');
const { RestaurantService } = require('./RestaurantService');

const router = new Router();
const service = new RestaurantService();

/* Insert csv dataset to MongoDB */
router.get('/', (req, res) => res.status(200).json(Restaurant.get()));
router.post('/build-dataset', (req, res) => {
  service.buildDataSet();
  res.status(201).json('ok csv');
});


/* CRUD operations */
router.get('/getAll', (req, res) => {
  let restaurants = null;
  service.getAll()
    .then((docs) => {
      restaurants = docs;
      console.log(restaurants.length);
      res.status(200).json(restaurants);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.get('/find/:name', (req, res) => {
  let restaurant = null;
  service.findByName(req.params.name)
    .then((docs) => {
      restaurant = docs;
      console.log(req.params.name);
      res.status(200).json(restaurant);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.post('/create', (req, res) => {
  let restaurant = new Restaurant({
    restaurant_name: req.body.restaurant_name,
    restaurant_type: req.body.restaurant_type,
    opening_hours: req.body.opening_hours,
    wheelchair: req.body.wheelchair,
    type_cuisine: req.body.cuisine,
    delivery: req.body.delivery,
    takeaway: req.body.takeaway,
    phone: req.body.phone,
    website: req.body.website,
    address: req.body.address,
  });
  console.log(req.body.name);
  service.create(restaurant)
    .then((docs) => {
      restaurant = docs;
      console.log(req.body.name);
      res.status(200).json(restaurant);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put('/update/:id', (req, res) => {
  const newOne = {
    restaurant_name: req.body.restaurant_name,
    restaurant_type: req.body.restaurant_type,
    opening_hours: req.body.opening_hours,
    wheelchair: req.body.wheelchair,
    type_cuisine: req.body.cuisine,
    delivery: req.body.delivery,
    takeaway: req.body.takeaway,
    phone: req.body.phone,
    website: req.body.website,
    address: req.body.address,
  };
  service.findById(req.params.id)
    .then((oldOne) => {
      service.update(oldOne, newOne)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete('/delete/:id', (req, res) => {
  service.delete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/findByCity/:city', (req, res) => {
  service.findByCity(req.params.city)
    .then((result)=>{
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err)=>{
      console.log(err);
    });
});
router.get('/findByCountry/:country', (req, res) => {
  service.findByCountry(req.params.country)
    .then((result)=>{
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err)=>{
      console.log(err);
    });
});
module.exports = router;
