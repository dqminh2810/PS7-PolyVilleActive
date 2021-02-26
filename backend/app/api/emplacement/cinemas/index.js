const { Router } = require('express');
const { Cinema } = require('../../../models/index');
const { CinemaService } = require('./CinemaService');

const router = new Router();
const service = new CinemaService();

/* Insert csv dataset to MongoDB */
router.post('/build-dataset', (req, res) => {
    service.buildDataSet();
  res.status(201).json('ok csv');
});

/* CRUD operations */
router.get('/getAll', (req, res) => {
  let cinemas = null;
  service.getAll()
    .then((result) => {
      cinemas = result;
      console.log(cinemas.length);
      res.status(200).json(cinemas);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/findById/:id', (req, res) => {
  let cinema = null;
  service.findById(req.params.id)
    .then((result) => {
      cinema = result;
      console.log(req.params.id);
      res.status(200).json(cinema);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.get('/findByName/:name', (req, res) => {
  let cinema = null;
  service.findByName(req.params.name)
    .then((result) => {
      cinema = result;
      console.log(req.params.name);
      res.status(200).json(cinema);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.post('/create', (req, res) => {
  let cinema = new Cinema({
    cinema_name: req.body.cinema_name,
    opening_hour: req.body.opening_hour,
    wheelchair: req.body.wheelchair,
    nb_screen: req.body.nb_screen,
    capacity: req.body.capacity,
    phone: req.body.phone,
    website: req.body.website,
    address: req.body.address,
  });
  console.log(req.body.name);
  service.create(cinema)
    .then((result) => {
      cinema = result;
      console.log(req.body.name);
      res.status(200).json(cinema);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put('/update/:id', (req, res) => {
  const newOne = {
    cinema_name: req.body.cinema_name,
    opening_hour: req.body.opening_hour,
    wheelchair: req.body.wheelchair,
    nb_screen: req.body.nb_screen,
    capacity: req.body.capacity,
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
