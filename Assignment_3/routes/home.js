const homeRouter = require('express').Router();
const rootDir = require('../helpers/app-util');
const path = require('path');

homeRouter.get('/', function(req, res) {
    res.status(200);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));


})

module.exports = homeRouter;