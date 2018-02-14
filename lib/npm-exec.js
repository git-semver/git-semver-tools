const npm = require('npm');
// https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js
// https://github.com/npm/npm-registry-client
// npm show git-version-info versions --json - get all versions

function npmExec(command, args, cwd)
{
  // process.chdir(cwd);
  const configObject = { 'bin-links': false, verbose: true, prefix: project};

  return new Promise((resolve, reject) =>
  {
    npm.load(configObject, error => {
      if (error) { return reject(error); }

      npm.commands[command](args, (commandError, data) => {

        if (commandError) {
          reject(commandError);
        }

        resolve(data);
      });
    });

    npm.on('log', message => {
      console.log(message);
    });
  });
}

module.exports = npmExec;
