const express = require('express');

const Topic = require('../models/topic');

const router = express.Router();


router.get('/', (req, res) => {
    Topic.find().then((topics) => res.json(topics));
  });


  router.post('/', async (req, res, next) => {
    try {
          const topics = await Topic.create(req.body)      
      res.json(topics);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;
