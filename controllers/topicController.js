const express = require('express');
const Topic = require('../models/Topic');
const router = express.Router();


router.get('/', (req, res) => {
    Topic.find().then((topics) => res.json(topics));
  });