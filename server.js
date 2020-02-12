const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express(); 
app.use(express.json());

//Conectando DB
var urlhost = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost:27017/contacts";
var theport = process.env.PORT || 5000;
//Iniciando DB
mongoose.connect(urlhost, function(err, res) {
	if (err) {
    	console.log ('ERROR connecting to: ' + urlhost + '. ' + err);
    } else {
    	console.log ('Succeeded connected to: ' + urlhost);
    }
});
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));
app.listen('3001');