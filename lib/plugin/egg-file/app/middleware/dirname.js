'use strict';

const fs = require('fs');

const path = require('path');

module.exports = (option, app) => {
  console.log(option, app);
  return async function dirname(publicUrl, fileName) {
    return fs.readFileSync(path.join(__dirname, publicUrl + fileName), 'utf8');
  };
};
