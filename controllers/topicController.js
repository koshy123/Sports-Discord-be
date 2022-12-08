const express = require('express');
const Topic = require('../models/topic');
const router = express.Router();


router.get('/', (req, res) => {
    Topic.find().then((topics) => res.json(topics));
  });