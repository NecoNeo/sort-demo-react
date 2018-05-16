'use strict';

// bug bug bug

const path = require('path');

module.exports = {
  process(src, filename) {
    console.log(path.normalize(filename))
    return 'module.exports = ' + (require("worker-loader!" + path.normalize(filename))).toString();
    // return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
