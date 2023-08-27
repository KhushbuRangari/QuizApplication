const mongoose = require('mongoose');
const connectDB = require('./db');

const usersSchema =new  mongoose.Schema({
    username:String,
    password:String,
    role:String
});
module.exports =mongoose.model('usersModel',usersSchema);