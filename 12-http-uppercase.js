var http = require('http');
var map = require('through2-map');

var portNumber = process.argv[2];

var server = http.createServer((request, response) => {
  //console.log(request);
  if (request.method === 'POST')
    request.pipe(map((chunk) => {
      return chunk.toString().toUpperCase()
    })).pipe(response);
});

server.listen(portNumber);
