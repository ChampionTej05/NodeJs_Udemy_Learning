const path = require('path');
const rootDir = require('../helpers/app-util');
const shopRouter = require('express').Router();


shopRouter.get('', function(req, res, next) {
    console.log('In the Home Page');
    // __dirname --> Absolute file path of project folder file(in this case wherever shop.js is) in our OS
    const shopHtml = path.join(rootDir, 'views', 'shop.html')
    res.sendFile(shopHtml, {
        encoding: 'utf8'
    })
})

module.exports = shopRouter;