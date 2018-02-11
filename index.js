const npmRun = require('npm-run');

const versions = npmRun.execSync('npm show git-version-info versions --json');
console.log(JSON.stringify(versions.toString()));
