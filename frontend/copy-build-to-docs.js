const fs = require('fs-extra');
fs.removeSync('../docs');
fs.copySync('./build', '../docs');