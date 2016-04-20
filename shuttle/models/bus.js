var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var db = 'mongodb://104.143.38.56:27002/test';
var busSchema = new Schema({
	bus_id : String,
	time : Date,
	heading:String,
	location : {
		latitude:Number,
		longitude: Number
	}
});



busSchema.statics.test = function (callback) {
	this.find({bus_id:"1"},callback);
};


var Bus = mongoose.model('Bus',busSchema);


// var bus2 = new Bus({bus_id:"1", time:new Date, heading:"1", location:{longitude:40.813802, altitude:-73.604473}});
// bus2.save();


// Bus.test();

exports.Bus = Bus;
