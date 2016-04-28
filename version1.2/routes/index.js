var express = require('express');
var router = express.Router();
var models = require('../models/bus');
var mongoose = require('mongoose');
var Bus = models.Bus;
var db = 'mongodb://104.143.38.56:27002/test';

mongoose.connect(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/data',function(req, res){
  Bus.latest(function (err, doc) {
    res.json(doc);
  });
});


router.get('/test', function(req, res) {
  Bus.showAll(function (err,doc) {
    res.render('test',{buses:doc});
  });
});



module.exports = router;
