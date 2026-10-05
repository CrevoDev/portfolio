# Portfólio — Cleverson Domingues Pedroso

Site pessoal em React (Create React App), publicado no GitHub Pages: https://crevodev.github.io/portfolio/

## Seções

- **Projetos**: repositórios da conta [CrevoDev](https://github.com/CrevoDev), públicos e privados, com filtro por visibilidade, categoria e busca. Privados aparecem só como descrição, sem link.
- **Casos profissionais** com amostras de código reescritas, **Stack**, **Trajetória** e **Contato**.
- Português e inglês, com botão no menu.

## Como atualizar o conteúdo

O site é bilíngue (PT/EN). Os textos ficam em `src/i18n/pt.js` e `src/i18n/en.js`, com a mesma estrutura: ao mudar um, mude o outro.

| Arquivo | O que contém |
|---|---|
| `src/i18n/pt.js`, `en.js` | Bio, métricas, stack, trajetória e textos da interface. |
| `src/data/repositories.js` | Cards de repositórios (PT). Repo privado = sem `url`. `featured: true` destaca o card. |
| `src/data/projects.en.js` | Tradução dos cards, por id. Sem entrada, cai no português. |
| `src/data/cases.js` | Casos de empresa e a amostra de código associada (`sampleId`). |
| `src/data/profile.js` | E-mail, links e a contagem de repositórios (`GITHUB_SNAPSHOT`). |

Telefone e WhatsApp ficam fora do site de propósito (contato só por e-mail e LinkedIn).

## Desenvolvimento

```bash
npm install
npm start            # http://localhost:3000/portfolio
npm test             # testes de interface (React Testing Library)
npm run build        # build de produção
```

## Contagem de visitas

Usa [GoatCounter](https://www.goatcounter.com) (gratuito, sem cookies e sem dados pessoais; respeita "Do Not Track"). Fica desligada até configurar:

1. Crie uma conta no GoatCounter e escolha o código do site (ex.: `crevodev`).
2. No GitHub: Settings > Secrets and variables > Actions > Variables > nova variável `GOATCOUNTER_URL` com `https://crevodev.goatcounter.com/count`.
3. No `.github/workflows/deploy.yml`, passe a variável ao passo de build:
   ```yaml
   - name: 🏗️ Build
     run: npm run build
     env:
       REACT_APP_GOATCOUNTER_URL: ${{ vars.GOATCOUNTER_URL }}
   ```
4. Faça um novo deploy. As visitas aparecem em `https://crevodev.goatcounter.com`.

Para testar localmente com o build de produção: `REACT_APP_GOATCOUNTER_URL=... npm run build`.

## Estrutura

```
src/
  components/   Nav, Hero, Metrics, About, Marquee, Stack, Experience, Projects, Contact
  data/         conteúdo do site
  i18n/         idioma (PT/EN) e textos
  samples/      amostras de código dos casos profissionais
  styles.css    estilos (portados do design do Claude Design)
```

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que gera a versão (`scripts/version.js`), faz o build e publica no GitHub Pages. Detalhes de versionamento em [VERSIONING.md](VERSIONING.md).
