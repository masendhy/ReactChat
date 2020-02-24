var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var chatSchema = new Schema({
    id:Number,
    name: String,
    message: String
  });

  module.exports = mongoose.model('Chat', chatSchema);