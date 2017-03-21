var express = require('express');
var router = express.Router();

var Sensor = require(appRoot + '/app/models/Sensor.js');

router.get('/', function(req, res) {
		
		Sensor.find({}, function(err, sensors){
			if(err){
				res.send(err);
			}
			res.json(sensors);
		});
});

/*
router.get('*', function(req, res) {
		res.sendfile('./public/index.html');
});
*/
module.exports = router;

