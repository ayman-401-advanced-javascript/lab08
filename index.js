'use strict';

const mongoose = require('mongoose');
const server = require('./collection/server.js');

const MONOGDB_URI = 'mongodb://localhost:27017/lab8db';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONOGDB_URI, mongooseOptions);

server.start();