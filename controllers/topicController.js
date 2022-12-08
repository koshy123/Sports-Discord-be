const express = require('express');
const Topic = require('../models/topic-model');
const router = express.Router();


router.get('/', (req, res) => {
    Topic.find().then((burgers) => res.json(burgers));
  });