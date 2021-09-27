var express = require('express');
var serve_static = require('serve-static');
var http = require('http');
var path = require('path');
var fs = require('fs');

console.log('Chargement de la base de donnée....')
let database = JSON.parse(fs.readFileSync('nameDataBase.json'));

var app = express();

//Activation du serveur statique
app.use(serve_static(__dirname + "/public"))

var serveur = http.Server(app);
serveur.listen(8080, function(){});