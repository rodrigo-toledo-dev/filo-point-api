const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

// const mongourl = __DEV__ ? 'mongodb://localhost:27017/filoapi' : 'mongodb://heroku_9b647v1f:3vgtlrl19vpf02nbmoj3lb697c@ds353338.mlab.com:53338/heroku_9b647v1f';
const mongourl = 'mongodb://heroku_9b647v1f:3vgtlrl19vpf02nbmoj3lb697c@ds353338.mlab.com:53338/heroku_9b647v1f';

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models/');

app.use('/', require('./src/routes'));

app.listen(3001);
