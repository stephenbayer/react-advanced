const express = require('express');
const chalk = require('chalk');

import config from 'config';
import serverRender from 'renderers/server';

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
