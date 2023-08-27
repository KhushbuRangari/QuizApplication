const mongoose = require('mongoose');

const connectDB = async() => {

    try {
        
        mongoose.set('strictQuery',false);
        const connect = await mongoose.connect('mongodb+srv://khushburangari:kh12345678@cluster0.fuw2e5g.mongodb.net/Quiz')
        .then(()=>{

            console.log("Database connected");
        
        })
        console.log("Quiz Database Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports =connectDB;