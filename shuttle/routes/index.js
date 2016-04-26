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
	app.get('/google7368571379a6b882.html', function(req, res) {
  		res.send('google7368571379a6b882');
	});
	app.get('/suny', function(req, res) {
  		res.render('suny');
	});
	app.get('/anna-rubin-hall', function(req, res) {
  		res.render('anna-rubin-hall');
	});
	app.get('/edu-hall', function(req, res) {
  		res.render('edu-hall');
	});
	app.get('/about', function(req, res) {
  		res.render('about');
	});
	app.get('/contact', function(req, res) {
  		res.render('contact');
	});
};
