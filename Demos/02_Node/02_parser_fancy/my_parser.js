#!javascript
// Require my new parser.js file.
var Parser = require('./parser');
// Load the fs (filesystem) module.
var fs = require('fs');
// Read the contents of the file into memory.
fs.readFile('example_log.txt', function (err, logData) {
  // If an error occurred, throwing it will
  // display the exception and kill our app.
  if (err) throw err;
  // logData is a Buffer, convert to string.
  var text = logData.toString();
  // Create an instance of the Parser object.
  var parser = new Parser();
  // Call the parse function.
  console.log(parser.parse(text));
  // { A: 2, B: 14, C: 6 }
});