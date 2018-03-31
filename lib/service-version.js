class ServiceDependencies
{
  constructor({ version, targetPackage, serviceDependencies })
  {
    // parent package version
    this.version = version;

    // parent package calculated service dependencies
    // for calculation numbers of changes
    this.serviceDependencies = serviceDependencies;

    // target package model
    this.targetPackage = targetPackage;
  }

  function calculateChanges(dependenciesInfo)
  {
    return 1;
  }

  // Вычисляет сервисную версию родительского пакета
  function calculateServiceVersion(version, targetPackageInfo, dependenciesInfo)
  {
    const changes = calculateChanges(dependenciesInfo);
    const prerelease = targetPackageInfo.prerelease;
    const prereleasPackages = `${version}-service/${prerelease}.${changes}`;
    return prereleasPackages;
  }

  getPackageData()
  {
    return this.version;
  }
};

module.exports = ServiceDependencies;
