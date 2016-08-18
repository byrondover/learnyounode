var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

var formatJsonTime = function (date) {
  var response = {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  }
  return JSON.stringify(response);
}

var formatEpochTime = function (date) {
  var response = {
    'unixtime': date.valueOf()
  }
  return JSON.stringify(response);
}

var server = http.createServer((request, response) => {
  if (request.method != 'GET')
    return response.end('Send me a GET, please.\n');

  //console.log(request);
  //pathname
  //query

  var fullPath = request.url;
  var urlContents = url.parse(fullPath, true);
  var endpoint = urlContents.pathname;
  var dateString = urlContents.query.iso;

  if (endpoint === '/api/parsetime')
    var parseFunction = formatJsonTime;
  else if (endpoint === '/api/unixtime')
    var parseFunction = formatEpochTime;
  else
    return response.end('Route not found.\n');

  if (dateString == null)
    return response.end('Include an "iso" GET parameter, please.\n');

  var timestamp = new Date(dateString.toString());
  var formattedTime = parseFunction(timestamp);

  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(formattedTime);
});

server.listen(portNumber);
