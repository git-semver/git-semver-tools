#!/usr/bin/env node

// После выпуска новой пререлизной версии пакета (целевой пакет),
// нужно обновить его версию в пакете, который от него зависит (родительский пакет).
// Для этого запускается данный скрипт.
// На вход принимает:
// - targetVersion - полная версия выпущенного целевого пакета
// - targetName - название целевого пакета
//
// При этом обновляются все остальные зависимости в соответствии с пререлизной
// группой:
// - alpha
// - beta
// - rc
// - hotfix
// - feature-<featureTag>

const path = require('path');
const normalizeData = require('normalize-package-data');
const program = require('commander');

const serviceBump = require('./lib/service-bump');

const defaultWorkDirectory = process.cwd();
const version = require(path.join(__dirname, '/package.json')).version;
let currentWorkDirectory = defaultWorkDirectory;

program
  .version(version, '-v, --version')
  .arguments('[cwd]')
  .option('-j, --json', 'output as JSON')
  .option('-t, --teamcity', 'output for TeamCity as service message')
  .option('-w, --write', 'write version into package.json')
  .action(cwd => { currentWorkDirectory = cwd; })
  .parse(process.argv);

console.log('Bump service version on directory:', currentWorkDirectory)
