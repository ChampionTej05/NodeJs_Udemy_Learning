const path = require('path');
const rootDir = require('../helpers/app-util');
const adminRouter = require('express').Router();

// all routes are preceeded with /admin

// to navigate in between routes , we  need to specifically give admin/add-product, simmple /add-product is not enough

adminRouter.get('/add-product', function(req, res, next) {
    console.log('In the Add Product');
    // res.status(200);
    // res.send(
    //     '<htm><body><form method="post" action ="/admin/add-product"><input type="text" name= "msg" /> <button type="submit">SEND </button></form></body></html>'
    // );

    const addProductHtml = path.join(rootDir, 'views', 'add-product.html')
    res.sendFile(addProductHtml, {
        encoding: 'utf8'
    })

});

adminRouter.post('/add-product', function(req, res, next) {
    console.log('In the Product Page');
    const reqBody = req.body;
    console.debug('Request Body: %O', reqBody);
    res.redirect('/');
});

module.exports = adminRouter;