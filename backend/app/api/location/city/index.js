const { Router } = require('express');
const { CityService } = require('./CityService');


const router = new Router();
const service = new CityService();

router.get('/', (req, res) => res.status(200).json('Ok event'));
router.post('/build-dataset', (req, res) => {
    service.buildDataSet();
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

module.exports = router;
