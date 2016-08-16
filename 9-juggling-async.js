var bl = require('bl');
var http = require('http');

var responses = [];
var responsesReceived = 0;
var urlCount = process.argv.length - 2;

function consoleLogger(responses) {
  for (var i = 0; i < responses.length; i++) {
    console.log(responses[i]);
  }
}

function getHttpResponse(position, callback) {
  //console.log(url);
  //console.log(position);
  //console.log(callback);
  http.get(process.argv[position + 2], (response) => {
    response.pipe(bl((err, data) => {
      if (err)
        callback(err);

      let rawResponse = data.toString();
      callback(null, rawResponse, position);
    }))
  })
}

function waitToLog(err, data, position) {
  if (err)
    return console.error(err);

  responses.splice(position, 0, data);

  //console.log(responses);
  //console.log(responses.length);
  //console.log(urlCount);
  if (responses.length === urlCount)
    consoleLogger(responses);
}

for (var i = 0; i < urlCount; i++) {
  let position = i;
  getHttpResponse(position, waitToLog);
}
