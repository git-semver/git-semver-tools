
class DependentInfo
{
  constructor({ name, versionsRange })
  {
    this.name = name;
    this.versionsRange = versionsRange;
  }

  getAllVersions()
  {
    // npm show git-version-info versions --json
  }
}

class ServiceDependencies
{
  constructor({ dependencies, targetPackage })
  {
    this.dependencies = dependencies;
    this.targetPackage = targetPackage;
  }

  /*
  Возвращает информацию о всех доступных
  версиях зависимых пакетов

  return
  {
    package: <packageName>
    versions: [ '<version>', ... ]
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

  getPackageData()
  {
    return this.dependencies;
  }
}

module.exports = ServiceDependencies;
