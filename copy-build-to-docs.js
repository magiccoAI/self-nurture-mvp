const fs = require('fs-extra');
fs.removeSync('../docs/self-nurture-mvp');
fs.copySync('./build', '../docs/self-nurture-mvp');