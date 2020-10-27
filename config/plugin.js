'use strict';

const path = require('path');

exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-file'),
};
