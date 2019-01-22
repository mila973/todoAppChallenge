var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var bodyParser = require('body-parser');
var time = require('express-timestamp');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sqlRouter = require('./routes/sql');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(time.init);


//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sql', sqlRouter);
app.get('*', (req, res) => {
    res.sendFile('./client/build/index.html', { root: global });
});

// catch 404 and forward to error handler
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

app.use(cors());

module.exports = app;
