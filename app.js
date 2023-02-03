var express = require('express');
var path = require('path');
const dotenv = require("dotenv").config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const connectDb = require("./config/db")
const cors = require("cors")
const asyncHandler = require("express-async-handler")

connectDb()

var indexRouter = require('./routes/index');
var users = require('./routes/users');
var appData = require('./routes/appData')

var app = express();

const connected = asyncHandler(async (req,res) => {
    res.status(200).json({ message: 'connected' })
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api/connect', connected)

app.use('/api/users', users);
app.use('/api/appdata', appData)

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;
