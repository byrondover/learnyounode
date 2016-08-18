var fs = require('fs');

function filterFiles(files, extension) {
  var filteredList = [];

  for (var i = 0; i < files.length; i++) {
    fileParts = files[i].split('.');

    if (fileParts.length > 1) {
      var slice = fileParts.slice(-1);

      if (slice == extension) {
        filename = fileParts.join('.');
        filteredList.push(filename);
      }
    }
  }

  return filteredList;
}

module.exports = (directory, extension, callback) => {
  var dirListing;

  fs.readdir(directory, (err, files) => {
    if (err)
      return callback(err);

    filteredList = filterFiles(files, extension);

    callback(null, filteredList);
  })
}
