var net = require('net');
// var fs = require('fs');

var url = 'mongodb://127.0.0.1:27001/test';
// var url = 'mongodb://localhost:27002/test';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var busSchema = new Schema({
// 	bus_id : String,
// 	time : Date,
// 	next_stop:String,
// 	location : {
// 		longitude: Number,
// 		latitude: Number
// 	}
// });
// var Bus = mongoose.model('Bus',busSchema);
// mongoose.connect(url);


function listening (socket) {
    socket.on('data',function(data){
        var tmp = data.toString().split("\n");
        var data = tmp[tmp.length-1].split(",");

    	MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            var buses = db.collection('buses');
            buses.insertOne({
                bus_id: data[0],
                time: new Date(Date.now()),
                heading: data[1],
                location:{
                    latitude: parseFloat(data[2]),
                    longitude: parseFloat(data[3])
                }
            });
            db.close();
    	});
        // var bus = new Bus({
    	   //  bus_id: data[0],
        //     time: new Date(Date.now()),
        //     next_stop: data[1],
        //     location:{
        //         longitude: parseFloat(data[2]),
        //         latitude: parseFloat(data[3])
        //     }
        // });
        // bus.save();
        socket.write(data.toString());



        
    });
    socket.on('end', function(){
        console.log("disconnect");
    });
    socket.write("Ready to receive data.");
}

var server = net.createServer(listening);
server.listen(9999,function () {
    console.log("Server running");
})
