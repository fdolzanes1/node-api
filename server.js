const http = require('http');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
requireDir('./src/models');

//Iniciando o App
const app = express();

//Cors
app.use(cors());

app.use(require('./src/routes'), function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Configuring CORS W/ Dynamic Origin 
app.options(require('./src/routes'), cors());

//Data Parsing
app.use(express.json());

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