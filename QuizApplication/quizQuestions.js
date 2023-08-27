const mongoose = require('mongoose');
// const connectDB = require('./db');

const questionsSchema =new mongoose.Schema({
    question: String,

    options: {
        type:[String]
    },

    correctOption: Number
})
module.exports =mongoose.model('quizQuestions',questionsSchema);