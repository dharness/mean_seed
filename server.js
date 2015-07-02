// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http')
var MongoClient = require('mongodb').MongoClient;

// DATBASE CRUMBS ======================================

MongoClient.connect('mongodb://usc_admin:admin1@ds031701.mongolab.com:31701/usc_web', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");
    _db = db //this is our global database object
})

app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'))



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)