const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Topic = new Schema({
  firstName: String,
  lastName: String,
  comments: String
  
})

module.exports = mongoose.model('Topic', Topic)