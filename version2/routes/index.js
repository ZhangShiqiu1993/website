var express = require('express');
var router = express.Router();
var models = require('../models/bus');
var mongoose = require('mongoose');
var Bus = models.Bus;
var db = 'mongodb://104.143.38.56:27002/test';

mongoose.connect(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/update',function(req, res){
  Bus.latest(function (err, doc) {
    res.json(doc);
  });
});

router.get('/google7368571379a6b882.html', function(req, res) {
  res.render('google7368571379a6b882');
});

module.exports = router;
