const express = require('express');
const bodyParser = require ('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroute.cjs');
 const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/reeact-node")
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log('Could not connect to the database', err))

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(cors());
 app.use('/api/v1/user', userRoutes);

 app.use((req,res) =>{
      res.send("Hello world!!!");
 });

 module.exports = app;