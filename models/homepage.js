const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: String,
    subject: String,
    location: String,
    duration: Number,
    from: Date,
    to: Date
   })

module.exports = mongoose.model('homepage',schema)