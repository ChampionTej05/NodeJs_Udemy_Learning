const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const homeRouter = require('./routes/home');
const rootDir = require('./helpers/app-util');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(rootDir, "public")))

app.use('/users', userRouter);
app.use('/', homeRouter);





app.listen(3000);