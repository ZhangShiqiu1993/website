var models = require('../models/bus');
var mongoose = require('mongoose');
var Bus = models.Bus;
var db = 'mongodb://104.143.38.56:27002/test';

mongoose.connect(db);


module.exports = function(app) {
	app.get('/', function(req, res) {
		Bus.test(function (err,doc) {
			res.render('index',{buses:doc});
		});
	});

	// app.get('/test', function(req, res) {
	// 	Bus.test(function (err,doc) {
	// 		res.render('index',{buses:doc});
	// 	});
	// });

	// app.get('/', function(req, res) {
	// 	Bus.toSUNY(function (err,doc) {
	// 		res.render('suny',{buses:doc});
	// 	});
	// });


	app.get('/google7368571379a6b882.html', function(req, res) {
  		res.send('google7368571379a6b882');
	});


	app.get('/suny', function(req, res) {
		Bus.toSUNY(function (err,doc) {
			res.render('suny',{buses:doc});
		});
	});
	app.get('/anna-rubin-hall', function(req, res) {
		Bus.toAR(function (err,doc) {
			res.render('anna-rubin-hall',{buses:doc});
		});
	});
	app.get('/edu-hall', function(req, res) {
		Bus.toEH(function (err,doc) {
			res.render('edu-hall',{buses:doc});
		});
	});
	app.get('/about', function(req, res) {
  		res.render('about');
	});
	app.get('/contact', function(req, res) {
  		res.render('contact');
	});
};
