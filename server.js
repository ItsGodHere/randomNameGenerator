var express = require('express');
var serve_static = require('serve-static');
var http = require('http');
var path = require('path');
var fs = require('fs');
var utils = require('./public/utils');

console.log('Chargement de la base de donnée...')
let database = JSON.parse(fs.readFileSync('./public/nameDataBase.json'));

var app = express();

//Activation du serveur statique
app.use(serve_static(__dirname + "/public"))

app.get('/generate/name', function (req, res)
{
    var entier = utils.randomNumber(0, 99);
    res.send(database[entier]["name"])
})

var serveur = http.Server(app);
serveur.listen(8080, function () {
    console.log('Serveur en ecoute sur le port 8080...')
});