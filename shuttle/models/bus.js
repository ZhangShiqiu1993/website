var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var busSchema = new Schema({
	bus_id : String,
	time : Date,
	direction:String,
	location : {
		longitude: Number,
		altitude: Number
		// 40.813802, -73.604473
	}//ensureIndex({"location":"2d"});
});


// db.buses.find({"location":{"$near":{longitude:1,altitude:1},"$maxDistance":10}}).pretty()
//Model
// Instance Methods
// busSchema.statics.findBySameID = function (callback) {
// 	return this.model('Bus').find({bus_id:this.bus_id}, callback);
// }


busSchema.statics.test = function (callback) {
	this.find({bus_id:"1"},callback);
};


var Bus = mongoose.model('Bus',busSchema);



// var bus2 = new Bus({bus_id:"1",time:new Date,direction:"1",location:{longitude:40.813802,altitude:-73.604473}});
// bus2.save();


// Bus.test();

exports.Bus = Bus;
