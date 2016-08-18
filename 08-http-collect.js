var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (response) => {
  response.pipe(bl((err, data) => {
    rawResponse = data.toString();
    responseLength = rawResponse.length;
    console.log(responseLength);
    console.log(rawResponse);
  }))
})
