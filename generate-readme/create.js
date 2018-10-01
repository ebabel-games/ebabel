const exec = require('child_process').exec;

const package = require('../package.json');

exec('rm ./README.md');
exec('rm ./docs/*.md');

// Get each dependency name and output its jsdoc md formatted text as files.
Object.keys(package.dependencies).map((dependency) => 
  exec(`node ./node_modules/.bin/jsdoc2md node_modules/${dependency}/index.js > ./docs/${dependency.toUpperCase().replace(/-/g, '_')}.md`)
);
