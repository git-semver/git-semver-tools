const ParentalPackage = require('./parental-parental-package');
const TargetPackage = require('./target-package');

const targetVersion = '3.2.3-alpha.1';
const targetPackage = 'target-package';
const packageDirectory = process.cwd();

module.exports = ({ targetVersion, targetPackage, packageDirectory }) =>
{
  const parentalPackage = new ParentalPackage({ packageDirectory });
  const targetPackage = new TargetPackage({
    package: targetPackage,
    version: targetVersion
  });
  parentalPackage.applyTargetPackage(targetPackage);
  parentalPackage.save();
};
