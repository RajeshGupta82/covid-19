const router = require('express').Router();
let VaccVal = require('../models/covidVal.models')

router.route('/').get((req, res) => {
  VaccVal.find()
    .then(vaccVal => res.json(vaccVal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;

  const newVacc = new VaccVal({
    username,
    description,
  });

  newVacc.save()
  .then(() => res.json('A USERS VACCINE EVAL values added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router