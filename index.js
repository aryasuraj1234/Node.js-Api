const express = require("express");
require('./db/config');
const app=express();
const jwt = require("jsonwebtoken");
const jwtkey="users";
// const mongoose = require('mongoose');
require("dotenv").config();
const studentRouter=require("./routes/students");
const userRouter=require("./routes/users");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/s",studentRouter);
app.use("/r",userRouter);

const port =7000;
// mongoose.connect(process.env.CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port,()=>{
    console.log("server is run here");
});