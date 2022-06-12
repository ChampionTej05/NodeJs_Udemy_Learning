const path = require('path')

// this will always give the DIR path of app.js or starting file for your project 
const rootDir = path.dirname(require.main.filename);

module.exports = rootDir;