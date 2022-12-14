const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const mongoose = require("mongoose");
const config = require("./config");
const {isAuth} = require("./util/authMiddlewhere");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
mongoose.connect(
    config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/students', isAuth, require("./routes/students"));

module.exports = app;
