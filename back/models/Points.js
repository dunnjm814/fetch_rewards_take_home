const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Pointschema = new Schema({
  payer: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
  }
})

module.exports = Points = mongoose.model('points', Pointschema)
