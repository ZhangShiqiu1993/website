var net = require('net');
var fs = require('fs');

function listening (socket) {
        socket.on('data',function(data){
                // socket.write(data.toString()+' GET');
                fs.appendFile('./geo_data.log',data.toString()+"\n",{flags:"a+",autoClose:true},function (err){
                        if (err) {
                                console.log(err);
                        };
                });
                socket.write(data.toString()+' GET');
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