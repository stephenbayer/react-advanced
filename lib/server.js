const express = require('express');
const chalk = require('chalk');

import config from 'config';
import serverRender from 'renderers/server';
import data from './data/react-blog-test-data';

const debug = require('debug')('app:server');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    const initialContent = await serverRender();
    res.render('index', {...initialContent});
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  debug(`Running on port ${chalk.green(config.port)}`)
});
