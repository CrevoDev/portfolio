# 📋 Sistema de Versioning Automático

Este diretório contém scripts para gerenciamento automático de versões do portfolio.

## 🚀 Scripts Disponíveis

### `version.js`
Script principal que automatiza o processo de versioning baseado no número de commits do Git.

#### Funcionalidades:
- **Contagem de Commits**: Obtém o número total de commits na branch main
- **Geração de Versão**: Cria versão no formato `1.{commitCount}.0`
- **Atualização Automática**: Atualiza `package.json` e `VERSION.md`
- **Arquivo de Build**: Gera `src/version.json` com informações da versão

#### Como Usar:
```bash
# Executar manualmente
npm run version

# Executar antes do deploy (automático)
npm run deploy
```

## 📦 Estrutura de Versão

### Formato: `MAJOR.MINOR.PATCH`
- **MAJOR**: Sempre 1 (versão principal)
- **MINOR**: Número de commits na main
- **PATCH**: Sempre 0 (para releases automáticos)

### Exemplos:
- `v1.1.0` - Primeiro commit
- `v1.5.0` - Quinto commit
- `v1.23.0` - Vigésimo terceiro commit

## 🔄 Fluxo de Deploy

1. **Pre-deploy**: `npm run version` (atualiza versão)
2. **Build**: `npm run build` (gera build)
3. **Deploy**: `gh-pages -d build` (publica)
4. **Post-deploy**: Mensagem de confirmação

## 📁 Arquivos Gerados

### `src/version.json`
```json
{
  "version": "1.5.0",
  "commitCount": 5,
  "buildDate": "2024-12-19T10:30:00.000Z",
  "buildNumber": 5,
  "environment": "production"
}
```

### `VERSION.md`
- Histórico completo de versões
- Changelog automático
- Informações de build

## 🛠️ Configuração

### Package.json Scripts:
```json
{
  "scripts": {
    "version": "node scripts/version.js",
    "predeploy": "npm run version && npm run build",
    "deploy": "gh-pages -d build",
    "postdeploy": "echo 'Deploy concluído! Versão atualizada automaticamente.'"
  }
}
```

## 📊 Componente de Versão

O `VersionComponent` exibe informações da versão no footer:
- **Versão**: Número da versão atual
- **Build**: Número do build (commits)
- **Data**: Data do build

## 🔧 Troubleshooting

### Erro: "git rev-list --count HEAD"
- Verifique se está em um repositório Git
- Execute `git init` se necessário

### Erro: "package.json não encontrado"
- Execute o script na raiz do projeto
- Verifique se o arquivo existe

### Versão não atualiza
- Verifique permissões de escrita
- Execute `npm run version` manualmente

## 📝 Logs

O script exibe logs coloridos:
- 🚀 **Cyan**: Início do processo
- 📊 **Blue**: Informações de commit
- 🎯 **Magenta**: Nova versão
- ✅ **Green**: Sucesso
- ❌ **Red**: Erro

## 🎯 Próximas Melhorias

- [ ] Suporte a tags Git
- [ ] Versionamento semântico
- [ ] Integração com CI/CD
- [ ] Notificações de deploy
