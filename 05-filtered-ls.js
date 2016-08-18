var fs = require('fs');

function filterFiles(files) {
  var filteredList = [];

  for (var i = 0; i < files.length; i++) {
    fileParts = files[i].split('.');

    if (fileParts.length > 1) {
      extension = fileParts.slice(-1);

      if (extension == process.argv[3]) {
        filename = fileParts.join('.');
        filteredList.push(filename);
      }
    }
  }

  logFiles(filteredList);
}

function logFiles(filesList) {
  output = filesList.join('\n');
  console.log(output);
}

(function getFiles() {
  var dirListing;

  fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err;

    filterFiles(files);
  })
})();
