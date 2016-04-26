var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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


exports.Bus = Bus;
