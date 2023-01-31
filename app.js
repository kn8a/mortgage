var express = require('express');
var path = require('path');
const dotenv = require("dotenv").config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const connectDb = require("./config/db")
const cors = require("cors")
const asyncHandler = require("express-async-handler")

connectDb()

var users = require('./routes/users');
var appData = require('./routes/appData')

var app = express();

const connected = asyncHandler(async (req,res) => {
    res.status(200).json({ message: 'connected' })
})

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/connect', connected)

app.use('/api/users', users);
app.use('/api/appdata', appData)

module.exports = app;
