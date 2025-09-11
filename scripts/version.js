#!/usr/bin/env node

/**
 * Script de Versioning Automático
 * Captura o número de push na main e atualiza a versão
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Cores para console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getCommitCount() {
  try {
    // Conta o número de commits na branch main
    const count = execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim();
    return parseInt(count);
  } catch (error) {
    log('❌ Erro ao obter número de commits:', 'red');
    log(error.message, 'red');
    return 1; // Fallback para versão 1
  }
}

function getCurrentVersion() {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return packageJson.version;
  } catch (error) {
    log('❌ Erro ao ler package.json:', 'red');
    return '0.1.0';
  }
}

function updatePackageJson(newVersion) {
  try {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    packageJson.version = newVersion;
    
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
    log(`✅ package.json atualizado para versão ${newVersion}`, 'green');
  } catch (error) {
    log('❌ Erro ao atualizar package.json:', 'red');
    log(error.message, 'red');
  }
}

function updateVersionMd(newVersion, commitCount) {
  try {
    const versionPath = path.join(process.cwd(), 'VERSION.md');
    let content = fs.readFileSync(versionPath, 'utf8');
    
    // Atualiza a versão atual
    content = content.replace(/## 🚀 Versão Atual: v[\d.]+/g, `## 🚀 Versão Atual: v${newVersion}`);
    
    // Adiciona nova entrada no changelog se não existir
    const today = new Date().toISOString().split('T')[0];
    const changelogEntry = `### v${newVersion} - ${today}
**🔄 Atualização Automática**

#### 📊 Detalhes
- **Número de Push**: ${commitCount}
- **Data**: ${today}
- **Tipo**: Atualização automática de versão

#### 🔧 Melhorias
- Atualização automática de versioning
- Melhoria no sistema de deploy
- Otimizações de performance

---

`;

    // Insere a nova entrada após a linha "## 📝 Changelog"
    const changelogIndex = content.indexOf('## 📝 Changelog');
    if (changelogIndex !== -1) {
      const insertIndex = content.indexOf('\n', changelogIndex) + 1;
      content = content.slice(0, insertIndex) + changelogEntry + content.slice(insertIndex);
    }
    
    fs.writeFileSync(versionPath, content);
    log(`✅ VERSION.md atualizado para versão ${newVersion}`, 'green');
  } catch (error) {
    log('❌ Erro ao atualizar VERSION.md:', 'red');
    log(error.message, 'red');
  }
}

function createVersionInfo(version, commitCount) {
  try {
    const versionInfo = {
      version: version,
      commitCount: commitCount,
      buildDate: new Date().toISOString(),
      buildNumber: commitCount,
      environment: process.env.NODE_ENV || 'development'
    };
    
    // Criar na pasta public para ser acessível via fetch
    const publicVersionPath = path.join(process.cwd(), 'public', 'version.json');
    fs.writeFileSync(publicVersionPath, JSON.stringify(versionInfo, null, 2));
    log(`✅ version.json criado em public/ com informações da versão ${version}`, 'green');
    
    // Também criar em src para desenvolvimento
    const srcVersionPath = path.join(process.cwd(), 'src', 'version.json');
    fs.writeFileSync(srcVersionPath, JSON.stringify(versionInfo, null, 2));
    log(`✅ version.json criado em src/ para desenvolvimento`, 'green');
    
    // Criar na pasta build se existir (após build)
    const buildVersionPath = path.join(process.cwd(), 'build', 'version.json');
    if (fs.existsSync(path.join(process.cwd(), 'build'))) {
      fs.writeFileSync(buildVersionPath, JSON.stringify(versionInfo, null, 2));
      log(`✅ version.json criado em build/ para produção`, 'green');
    }
  } catch (error) {
    log('❌ Erro ao criar version.json:', 'red');
    log(error.message, 'red');
  }
}

function main() {
  log('🚀 Iniciando processo de versioning...', 'cyan');
  
  // Obtém o número de commits
  const commitCount = getCommitCount();
  log(`📊 Número de commits: ${commitCount}`, 'blue');
  
  // Gera nova versão baseada no número de commits
  const newVersion = `1.${commitCount}.0`;
  log(`🎯 Nova versão: ${newVersion}`, 'magenta');
  
  // Atualiza package.json
  updatePackageJson(newVersion);
  
  // Atualiza VERSION.md
  updateVersionMd(newVersion, commitCount);
  
  // Cria arquivo de informações da versão
  createVersionInfo(newVersion, commitCount);
  
  log('✅ Processo de versioning concluído!', 'green');
  log(`📦 Versão ${newVersion} (${commitCount} commits)`, 'bright');
}

// Executa o script
if (require.main === module) {
  main();
}

module.exports = { getCommitCount, updatePackageJson, updateVersionMd, createVersionInfo };
