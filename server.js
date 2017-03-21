//Enviroment Variables
require('./environmentvariables.js')

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var path = require('path');
global.appRoot = path.resolve(__dirname);

var routeSensors = require('./app/routers/Sensor');

// configuration ===========================================
	
// config files
//var db = require('./config/db');

//BD
var mongoose = require('mongoose');
mongoose.connect(process.env['mongodb']);

var port = process.env.PORT || 8080; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
app.use('/Sensors',routeSensors); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user

exports = module.exports = app; 						// expose app