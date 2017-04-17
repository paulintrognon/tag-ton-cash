'use strict';

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('./services/logger.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));

const api = require('./routes/api.js');
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  const address = server.address();
  logger.info(`API up and running on ${address.address}:${address.port}`);
});
