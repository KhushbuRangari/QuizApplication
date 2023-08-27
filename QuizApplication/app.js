const connect = require('./db');
const usersModel = require('./usersModel');
const quizQuestions = require('./quizQuestions');

// console.log(connect());
const express = require('express');
const app = new express();
app.use(express.json());

const PORT = 3002;
connect();
app.get("/users",async (req,res)=>{
    const user = await usersModel.find();
    console.log(user);
    res.send(user);
});

// ********Student sign up***********

app.post('/studentSignUp',async(req,res)=>{
    const {username,password,role}=req.body;
    const user = new usersModel({username,password,role});
    const data =await user.save();
    console.log("Congratulations new Student user signedUp\n"+data);
})

// ********Admin sign up***********

app.post('/adminSignUp',async(req,res)=>{
    const {username,password,role}=req.body;
    const user = new usersModel({username,password,role});
    const data =await user.save();
    console.log("Congratulations new Admin user signedUp\n"+data);
})


// ********Student Login***********

app.post('/studentLogin',async(req,res)=>{
    const {username,password,role}=req.body;
    const user = new usersModel({username,password,role});
    const verify =await usersModel.find({}).then((u)=>
    { return u.filter(u=>u.username===username && u.password===password) }
  );
    if(verify){
        res.json({
            message:"Succesfully login",
            user
        })
    }
    else {
        res.status(401).json({ 
            message: 'Invalid credentials' 
        });
      }
    console.log("Congratulations new user signedUp\n");
})


// ********Admin Login***********

app.post('/adminLogin',async(req,res)=>{
    const {username,password,role}=req.body;
    const user = new usersModel({username,password,role});
    const verify =await usersModel.find({}).then((u)=>
    { return u.filter(u=>u.username===username && u.password===password) }
  );
    if(verify){
        res.json({
            message:"Succesfully login",
            user
        })
    }
    else {
        res.status(401).json({ 
            message: 'Invalid credentials' 
        });
      }
    console.log("Congratulations new user signedUp\n"+data);
})

// ********* Admin add question **********

app.post('/addQuestion', async(req, res) => {
    const { question, options, correctOption } = req.body;
  
    const newQuestion =new  quizQuestions({
        question, options, correctOption });
  
    const savedQuestion = await newQuestion.save();
    console.log(newQuestion, "added question");
  });


  app.delete('/remove-question/:id', async(req, res) => {
    const {questionID} =req.params.id;
    console.log(questionID);
  });



app.listen(PORT,()=>{
    console.log("SERVER RUNNING");
})
