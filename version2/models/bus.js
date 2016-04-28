/**
 * Created by zhangshiqiu on 16/4/28.
 */
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



busSchema.statics.latest = function (callback) {
  this.
    find({bus_id:"1"}).
    sort({"time":-1}).
    limit(10).
    exec(callback);
};

var Bus = mongoose.model('Bus',busSchema);


exports.Bus = Bus;
