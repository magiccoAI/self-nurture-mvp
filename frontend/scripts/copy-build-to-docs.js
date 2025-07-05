const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../build');
const destDir = path.resolve(__dirname, '../../docs/self-nurture-mvp');

fs.emptyDir(destDir)
  .then(() => {
    console.log(`Successfully emptied ${destDir}`);
    return fs.copy(sourceDir, destDir);
  })
  .then(() => {
    console.log(`Successfully copied ${sourceDir} to ${destDir}`);
  })
  .catch(err => {
    console.error('Error during copy:', err);
    process.exit(1);
  });