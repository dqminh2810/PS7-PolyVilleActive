
const { Router } = require('express');
const { SportCenter } = require('../../../models/index');
const { SportCenterService } = require('./SportCenterService');

const router = new Router();
const service = new SportCenterService();

router.post('/build-dataset', (req, res) => {
  service.buildDataSet();
  res.status(201).json('ok csv');
});


/* CRUD operations */
router.get('/getAll', (req, res) => {
  let sportcenters = null;
  service.getAll()
    .then((result) => {
      sportcenters = result;
      console.log(sportcenters.length);
      res.status(200).json(sportcenters);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/findById/:id', (req, res) => {
  let library = null;
  service.findById(req.params.id)
    .then((result) => {
      library = result;
      console.log(req.params.id);
      res.status(200).json(library);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.get('/findByName/:name', (req, res) => {
  let library = null;
  service.findByName(req.params.name)
    .then((result) => {
      library = result;
      console.log(req.params.name);
      res.status(200).json(library);
    })
    .catch((err) => {
      console.error(err);
    });
});
router.post('/create', (req, res) => {
  let city = null;
  city_service.findByName(req.body.city).then(res => {
    city = res;
  });
  let library = new SportCenter({
    name: req.body.name,
    sport_types: req.body.sport_types,
    lat: req.body.lat,
    long: req.body.long,
    is_in: city
  });
  console.log(req.body.name);
  service.create(library)
    .then((result) => {
      library = result;
      console.log(req.body.name);
      res.status(200).json(library);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put('/update/:id', (req, res) => {
  let city = null;
  city_service.findByName(req.body.city).then(res => {
    city = res;
  });
  const newOne = {
    name: req.body.name,
    sport_types: req.body.sport_types,
    lat: req.body.lat,
    long: req.body.long,
    is_in: city
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
