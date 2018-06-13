const express = require('express');
const config = require('./config');
const chalk = require('chalk');
const debug = require('debug')('app:server');
const app = express();

app.use(express.static('../dist'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {answer: 'life, universe, everything'});
});

app.listen(config.port, function listenHandler() {
  debug(`Running on port ${chalk.yellow.bgBlue(config.port)}`)
});