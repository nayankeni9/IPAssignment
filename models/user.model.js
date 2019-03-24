const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

mongoose.model('User', userSchema)