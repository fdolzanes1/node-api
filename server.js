const http = require('http');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

requireDir('./src/models');

//Iniciando o App
const app = express();

//Cors
app.use(cors());

//Data Parsing
app.use(express.json());

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
next();
});


//Conectando DB
const urlhost = process.env.MONGODB_URI || process.env.MONGOHQ_URL || "mongodb://localhost:27017/contacts";
const theport = process.env.PORT || 5000;

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

//HTTP
app.use('/api', require('./src/routes'));
app.listen(theport, console.log(`Server is starting at ${theport}`));