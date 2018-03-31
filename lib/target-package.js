class TargetPackage
{
  constructor({ package, version })
  {
    this.package = package;
    this.version = version;
    this.prerelease = this.calculatePrerelease();
  }

  calculatePrerelease()
  {
    return this.version;
  }

  // Filtered array of versions other package by current prerelease
  filterPrereleaseVersions(versions)
  {
    return versions;
  }
}

module.exports = TargetPackage;
