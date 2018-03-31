class ParentalPackage
{
  constructor({ packageDirectory })
  {
    this.packageJsonPath = path.resolve(
      path.join(packageDirectory, 'package.json'));
    this.packageJsonData = require(packageJsonPath);
  }

  getServiceVersion()
  {
    if (this.serviceDependencies)
    {
      const { version } = this.packageJsonData;
      this.serviceDependencies =
        new ServiceVersion({
          version,
          targetPackage,
          serviceDependencies: this.getServiceDependencies()
        });
    }

    return this.serviceDependencies;
  }

  applyServiceVersion(targetPackage)
  {
    this.packageJsonData.dependencies =
      this.getServiceVersion().getPackageData();
  }

  getServiceDependencies()
  {
    if (!this.serviceDependencies)
    {
      const { dependencies } = this.packageJsonData;
      this.serviceDependencies =
        new ServiceDependencies({
          dependencies,
          targetPackage
        });
    }

    return this.serviceDependencies;
  }

  applyServiceDependencies(targetPackage)
  {
    this.packageJsonData.version =
      this.getServiceDependencies().getPackageData();
  }

  applyTargetPackage(targetPackage)
  {
    this.applyServiceDependencies(targetPackage)
    this.applyServiceVersion(targetPackage)
  }

  getData(strategy)
  {

  }

  save()
  {
    const writePackageJsonData = JSON.stringify(this.packageJsonData, null, 2);
    console.log(writePackageJsonData);
  }
}

module.exports = ParentalPackage;
