'use strict';

const filename = 'logs.txt';
const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename }),
  ],
});

module.exports = logger;
