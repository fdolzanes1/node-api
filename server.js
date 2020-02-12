const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
requireDir('./src/models');

//Iniciando o App
const app = express(); 


//Conectando DB
var urlhost = process.env.MONGODB_URI || process.env.MONGOHQ_URL || "mongodb://localhost:27017/contacts";
var theport = process.env.PORT || 8080 || 5000;
//Iniciando DB
mongoose.connect(urlhost, 
  {
    useUnifiedTopology: true, 
    useNewUrlParser: true,     
    useCreateIndex: true 
  }
);


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


//Data Parsing
app.use(express.json());

//HTTP
app.use('/api', require('./src/routes'));
app.listen(PORT);