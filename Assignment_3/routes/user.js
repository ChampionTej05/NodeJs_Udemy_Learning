const userRouter = require('express').Router();
const rootDir = require('../helpers/app-util');
const path = require('path');

userRouter.get('/', function(req, res) {
    res.status(200);
    res.sendFile(path.join(rootDir, 'views', 'user.html'));


})

module.exports = userRouter;