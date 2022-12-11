const express = require('express');
const Topic = require('../models/Topic');
const router = express.Router();

router.get('/', (req, res) => {
    Topic.find().then((topics) => res.json(topics));
  });
router.get('/:id', async (req, res, next) => {
    try {
      const topicId = await Topic.findById(req.params.id);
      res.json(topicId);
    } catch (err) {
      next(err);
    }
  });
router.post('/', async (req, res, next) => {
    try {
          const topics = await Topic.create(req.body)      
      res.json(topics);
    } catch (err) {
      next(err);
    }
  });
router.put('/:id', (req, res) => {
  Topic.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((updateTopic) => {
    console.log(updateTopic)
    console.log(req.body)

    Topic.find({}).then((topics) => {
      res.json(topics)
      
    })
  }); 
});

router.delete('/:id', (req, res) => {
    Topic.findOneAndDelete({
      _id: req.params.id,
    }).then((deleteTopic) => {
      Topic.find({}).then((topics) => {
        console.log(topics)
        res.json(topics)
        
      })
    }); 
  });

module.exports = router;