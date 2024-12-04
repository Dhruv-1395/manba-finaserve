const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    city:String,
    message:String,
    loan:String
});

module.exports = mongoose.model('users', userSchema);