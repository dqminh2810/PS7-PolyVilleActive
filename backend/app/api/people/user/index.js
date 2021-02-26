const csv = require('csv-parser');
const fs = require('fs');
const { Router } = require('express');
const { User } = require('../../../models/index');
const { UserService } = require('./UserService');

const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./config/auth");

const router = new Router();
const service = new UserService();


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

router.get('/findByName/:name', (req, res) => {
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
router.post("/signup", service.registerNewUser);
router.post("/login", service.loginUser);
router.get("/me", auth, service.getUserDetails);

module.exports = router;
