const Topic = require('../models/Topic');
const topicData = require('../db/topics.json');

Topic.deleteMany()
  .then(() => Topic.insertMany(topicData))
  .then(console.log)
  .catch(console.error)
  .finally(process.exit);