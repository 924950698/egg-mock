// 上下文

const fs = require('fs');

const path = require('path');


module.exports = {

  dirname(publicUrl, fileName) {
    return fs.readFileSync(path.join(__dirname, publicUrl + fileName), 'utf8');
  }

}