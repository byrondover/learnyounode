var fs = require('fs');

function getLines() {
  var readLines;

  fs.readFile(process.argv[2], (err, data) => {
    if (err) console.log('Error occurred!');

    readLines = data.toString();
    logLines(readLines);
  })
}

function logLines(message) {
  arrayOfLines = message.split('\n');
  numberOfLines = arrayOfLines.length - 1;
  console.log(numberOfLines);
}

getLines();
