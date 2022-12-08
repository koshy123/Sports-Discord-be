/// Require the Job model
const Topic = require('../models/Topic');
// Require the data
const topicData = require('../db/topics.json');

// Delete any existing documents in the jobs collection
Topic.deleteMany()
  // Use insertMany and pass it the seed data
  .then(() => Topic.insertMany(topicData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not
  // things worked and close our connection to the database.
  .finally(process.exit);