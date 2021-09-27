var express = require('express');
var serve_static = require('serve-static');
var http = require('http');
var path = require('path');
var fs = require('fs');
var utils = require('./public/utils');

console.log('Chargement de la base de donnée...')
let database = JSON.parse(fs.readFileSync('./public/nameDataBase.json'));

var app = express();

//activation du serveur statique
app.use(serve_static(__dirname + "/public"))

app.get('/generate/name', function (req, res)
{
    var entier = utils.randomNumber(0, (database.length-1));
    res.send(database[entier]["name"])
})

//récupération du serveur http de l'application
var serveur = http.Server(app);
//écoute sur un seul port
serveur.listen(2205, function () {
    console.log('Serveur en ecoute sur le port 2205...')
});