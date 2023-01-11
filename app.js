var express = require('express');
var path = require('path');
const dotenv = require("dotenv").config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const connectDb = require("./config/db")
const cors = require("cors")

connectDb()

var users = require('./routes/users');

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/users', users);

module.exports = app;
