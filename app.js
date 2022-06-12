const http = require('http');
const rootDir = require('./helpers/app-util');
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
// if we are using http createserver, data is streamed since request object passed in callback is a stream
// for express, it will be direct object

const app = express();
// parsing bodies for request
app.use(bodyParser.urlencoded({
    extended: false
}));

// gives public acccess to public folder serving static files

app.use(express.static(path.join(rootDir, "public")))


// add a default filter for the route admin/add-product 
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// All invaliid routes will land up here
app.use((req, res, next) => {
    const pageNotFoundHtml = path.join(rootDir, 'views', 'page-not-found.html')
    // res.status(404).send(
    //     "<h1> You have found the SECRET route </h1> <h2> Let's keep it secret from others </h2>"
    // )
    res.sendFile(pageNotFoundHtml, {
        encoding: 'utf8'
    })
})




app.listen(3000);


//module.exports = path.dirname(require.main.filename);