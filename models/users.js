const mongoose = require('mongoose')
const schema = mongoose.Schema({
    fullname: {
        type:String,
        require:true
    },

    username: {
        type:String,
        require:true
    },

    email: {
        type:String,
        require:true
    },

    password: {
        type:String,
        require:true
    }
})

module.exports = mongoose.model('user',schema)