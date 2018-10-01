const fs = require('fs');

// Concatenate each generated dependency doc in main README.
const mainPath = `${process.cwd()}/docs`;

const readAppend = (path, title = '') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, contents) => {
      if (err) reject(err);    
      const toAppend = [title, contents, '\n\n'].join('');
      fs.appendFile(`${process.cwd()}/README.md`, toAppend, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  });
}

readAppend(`${process.cwd()}/README_TEMPLATE.md`, '# ebabel\n').then(() => {
  fs.readdirSync(mainPath).forEach((fileName) => {
    if (fileName.indexOf('.DS_Store') === -1) {
      readAppend(`${mainPath}/${fileName}`);
    }
  });
});
