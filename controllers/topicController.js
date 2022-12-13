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


  // router.post('/', async (req, res) => {
  //   const newTopic = await Topic.create( req.body , {
  //     new: true,
  //   }).then(() => {
  //     Topic.find({}).then((topics) => {
  //       res.json(topics)
  //     })
  //   }); 
  // });
  router.post('/', async (req, res) => {
    const newTopic = await Topic.create(req.body)
    res.status(201).json(newTopic)
})
router.put('/:id', (req, res) => {
  Topic.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((updateTopic) => {
    Topic.find({}).then((topics) => {
      res.json(topics)
    })
  }); 
});

router.put('/addComment/:id', (req, res) => {
  Topic.findById(req.params.id , async (error, topic) => {
      topic.comments.push(req.body.comment)
      console.log(req.body, Topic)
      await topic.save()
      Topic.find({}).then((topics) => {
        res.json(topics)
      })
  })
});

router.delete('/:id', (req, res) => {
    Topic.findOneAndDelete({
      _id: req.params.id,
    }).then((deleteTopic) => {
      Topic.find({}).then((topics) => {
        res.json(topics)
      })
    }); 
  });

module.exports = router;