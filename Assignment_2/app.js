const express = require('express');

const app = express();

// app.use(function(req, res, next) {
//     console.log('Home Page');
//     next();
// });

// app.use(function(req, res, next) {
//     console.log('Another User Page');
//     res.status(200);
//     res.send('Welcome to Assignment 2 ');
// })


app.use('/user', function(req, res, next) {
    console.log('User Page');
    res.status(200);
    res.send('Welcome to User Page ');
})

app.use('/', function(req, res, next) {
    console.log('Home Page');
    res.status(200);
    res.send('Welcome to Home Page ');
})


app.listen(3000, function() {
    console.debug('Server running on localhost 3000');
})