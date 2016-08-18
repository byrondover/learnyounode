var fs = require('fs');
var mymodule = require('./06-mymodule.js');

function logFiles(err, filesList) {
  if (err) console.log('Error occured! ' + err);

  output = filesList.join('\n');
  console.log(output);
}

mymodule(process.argv[2], process.argv[3], logFiles);
