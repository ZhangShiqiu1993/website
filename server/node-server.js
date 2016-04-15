var net = require('net');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://127.0.0.1:27001/test';


function listening (socket) {
        socket.on('data',function(data){
                var tmp = data.toString().split("\n");
                var data = tmp[tmp.length-1].split(",");
                // fs.appendFile('./geo_data.log',
                //     new Date(Date.now()).toString()+" : "+tmp[tmp.length-1]+"\n--\n",
                //     {flags:"a+",autoClose:true},
                //     function (err){
                //         if (err) {
                //                 console.log(err);
                //         };
                //  });

                MongoClient.connect(url, function (err, db) {
                    assert.equal(null, err);
                    var buses = db.collection('buses');
                    buses.insertOne({
                        bus_id: data[0],
                        time: new Date(Date.now()),
                        next_stop: data[1],
                        location:{
                            longitude: data[2],
                            latitude: data[3]
                        }
                    });
                });
                socket.write(data.toString());
        });
        socket.on('end', function(){
                console.log("disconnect");
        });
        socket.write("Ready to receive data.");
}

var server = net.createServer(listening);
server.listen(8124,function () {
        console.log("Server running");
})
