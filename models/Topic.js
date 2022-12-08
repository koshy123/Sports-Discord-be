const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Topic = new Schema({
  topic: String,
  image: String,
  comments: String
  
})

module.exports = mongoose.model('Topic', Topic)