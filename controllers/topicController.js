const express = require('express');
const Topic = require('../models/Topic');
const router = express.Router();


router.get('/', (req, res) => {
    Topic.find().then((topics) => res.json(topics));
  });

//update 
router.put('/:id', (req, res) => {
  console.log(req.params.id)
  Topic.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((adjustTopic) => res.json(adjustTopic));
});

//delete
router.delete('/:id', (req, res) => {
    Topic.findOneAndDelete({
      _id: req.params.id,
    }).then((deleteTopic) => res.json(deleteTopic));
  });

  
module.exports = router;