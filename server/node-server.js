var net = require('net');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://127.0.0.1:27001/test';


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
                        next_stop: data[1],
                        location:{
                            longitude: parseFloat(data[2]),
                            latitude: parseFloat(data[3])
                        }
                    });
                });
                console.log("Done ： " + data.toString());
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
