const express = require('express');
const config = require('./config');
const chalk = require('chalk');
const serverRender = require('./serverRender');
const debug = require('debug')('app:server');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  debug(serverRender);
  const initialContent = serverRender();
  res.render('index', {initialContent});
});

app.listen(config.port, function listenHandler() {
  debug(`Running on port ${chalk.green(config.port)}`)
});
