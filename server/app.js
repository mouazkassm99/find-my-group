var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import mongoose from 'mongoose';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
import groupsRouter from './routes/groups';


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
// mongoose.connect('mongodb://localhost/FindMyGroup', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = app;
