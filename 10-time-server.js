var net = require('net');
var strftime = require('strftime');

portNumber = process.argv[2];

var server = net.createServer(function (socket) {
  date = strftime('%F %H:%M\n');
  //console.log(date);
  socket.end(date);
});

server.listen(portNumber);
