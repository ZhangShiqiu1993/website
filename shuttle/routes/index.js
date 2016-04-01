var models = require('../models/bus');
var mongoose = require('mongoose');
var Bus = models.Bus;
// var db = 'mongodb://localhost:27001/test';

mongoose.connect(db);


module.exports = function(app) {
	app.get('/', function(req, res) {
		Bus.test(function (err,doc) {
			res.render('index',{buses:doc});
		});
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
