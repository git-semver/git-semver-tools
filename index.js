#!/usr/bin/env node

const path = require('path');
const normalizeData = require('normalize-package-data');
const defaultWorkDirectory = process.cwd();

const packageJsonPath = path.resolve(path.join(defaultWorkDirectory, 'package.json'));
const prerelease = 'alpha';
const targetVersion = 'service/alpha.1';
const targetPackage = 'depended-package';
const targetInfo = {
  package: targetPackage,
  version: targetVersion
};

/*
return
{
package: <packageName>
currentVersions: [ '<version>', ... ]
}
*/
function produceActualDependenciesInfo(dependencies)
{
  return dependencies;
}

function produceActualDependencies(dependencies, target)
{
  return dependencies;
}

function calculateChanges(dependenciesInfo)
{
  return 1;
}

function calculateServiceVersion(version, prerelease, dependenciesInfo)
{
  const changes = calculateChanges(dependenciesInfo);
  const prereleasPackages = `${version}-service/${prerelease}.${changes}`;
  return prereleasPackages;
}

const packageJsonData = require(packageJsonPath);
const { dependencies, version: currentVersion } = packageJsonData;
const actualDependenciesInfo = produceActualDependenciesInfo(dependencies);

packageJsonData.version = calculateServiceVersion(
  currentVersion,
  prerelease,
  actualDependenciesInfo
);
packageJsonData.dependencies = produceActualDependencies(
  actualDependenciesInfo,
  targetInfo
);

const writePackageJsonData = JSON.stringify(packageJsonData, null, 2);
console.log(writePackageJsonData);
