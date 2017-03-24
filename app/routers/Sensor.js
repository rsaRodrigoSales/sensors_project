var express = require('express');
var router = express.Router();

var Sensor = require(appRoot + '/app/models/Sensor.js');

router.get('/', function(req, res) {
		console.log("get");
		Sensor.find({}, function(err, sensors){
			if(err){
				console.log("Error");
				res.send(err);

			}
			console.log("OK");
			res.json(sensors);
		});
});

router.get('/:sensor_id', function(req, res) {
	
		console.log("get by id");
	
		Sensor.findById(req.params.sensor_id, function(err, sensors){
			if(err){
				console.log("Error");
				res.send(err);

			}
			console.log("OK");
			res.json(sensors);
		});
});

router.delete('/:sensor_id', function(req, res) {
	
		console.log("delete by id");
	
		Sensor.remove({_id: req.params.sensor_id}, function(err, sensors){
			if(err){
				console.log("Error");
				res.send(err);

			}
			console.log("OK");
			res.json({message: "Deleted" });
		});
});

router.post('/', function(req, res) {
		console.log("post");
		var sensor = new Sensor();

		sensor.name = req.body.name;

		sensor.save(function(err){
			if(err){
				res.send(err);
			}

			res.json({message: "sensor created!"});
			console.log("OK");
		});
		
});

/*
router.get('*', function(req, res) {
		res.sendfile('./public/index.html');
});
*/
module.exports = router;

