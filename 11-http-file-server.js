var fs = require('fs');
var http = require('http');

var portNumber = process.argv[2];
var fileName = process.argv[3];

var fileStream = fs.createReadStream(fileName);

var server = http.createServer((request, response) => {
  fileStream.pipe(response);
});

server.listen(portNumber);
