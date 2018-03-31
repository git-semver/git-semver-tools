const ParentalPackage = require('./parental-package');
const TargetPackage = require('./target-package');

// const targetPackageVersion = '3.2.3-alpha.1';
// const targetPackageName = 'target-package';
// const packageDirectory = process.cwd();

module.exports = ({ targetPackageVersion, targetPackageName, targetPackageDirectory }) =>
{
  const parentalPackage = new ParentalPackage({
    packageDirectory: targetPackageDirectory
  });

  const targetPackage = new TargetPackage({
    name: targetPackageName,
    version: targetPackageVersion
  });
  parentalPackage.applyTargetPackage(targetPackage);
  parentalPackage.save();
};
