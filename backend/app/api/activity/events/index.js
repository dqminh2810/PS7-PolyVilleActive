const { Router } = require('express');
const { Event } = require('../../../models/index');
const { EventService } = require('./EventService');


const router = new Router();
const service = new EventService();


router.get('/', (req, res) => res.status(200).json('Ok event'));
router.post('/build-dataset', (req, res) => {
  service.buildDataSet()
  res.status(201).json('ok csv');
});

router.get('/getAll', (req, res) => {
  let event = null;
  service.getAll().then((docs) => {
    event = docs;
    console.log(event.length);
    res.status(200).json(event);
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/findByTitle/:title', (req, res) => {
  let event = null;
  console.log(req.params.title);
  service.findByTitle(req.params.title).then((docs) => {
    event = docs;
    res.status(200).json(event);
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/findById/:id', (req, res) => {
  let event = null;
  service.findById(req.params.id)
    .then((docs) => {
      event = docs;
      res.status(200).json(event);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/create', (req, res) => {
  let event = new Event({
    website: req.body.website,
    practical_information: req.body.practical_information,
    language: req.body.language,
    title: req.body.title,
    description: req.body.description,
    detail: req.body.detail,
    location: req.body.location,
    address: req.body.address,
    departement: req.body.departement,
    region: req.body.region,
    city: req.body.city,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    price: req.body.price,
  });
  console.log(req.body.name);
  service.create(event).then((docs) => {
    event = docs;
    console.log(req.body.name);
    res.status(200).json(event);
  }).catch(((err) => {
    console.log(err);
  }));
});

router.put('/update/:id', (req, res) => {
  const newOne = {
    website: req.body.website,
    practical_information: req.body.practical_information,
    language: req.body.language,
    title: req.body.title,
    description: req.body.description,
    detail: req.body.detail,
    location: req.body.location,
    address: req.body.address,
    departement: req.body.departement,
    region: req.body.region,
    city: req.body.city,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    price: req.body.price,
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

router.delete('/delete', (req, res) => {
  service.delete(req.params.id).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/findByCity/:city', (req, res) => {
  console.log('lookup');
  service.findByCity(req.params.city)
    .then((result)=>{
    console.log(result);
    res.status(200).json(result);
  })
    .catch((err)=>{
      console.log(err);
    });
});

module.exports = router;
