# Referência de pacote e build

## Identidade e distribuição

[`package.json`](../../package.json) declara `@jeftelabs/types`, versão `1.0.0`, em ESM. `main` e `exports["."]` apontam para `build/index.js`; `files` publica a pasta `build`, exceto `build/bin` e `build/tests`. O entry point-fonte [`index.ts`](../../index.ts) reexporta `src/base.ts` e `src/route.ts`.

## TypeScript

[`tsconfig.json`](../../tsconfig.json) estende `@arapucajs/tsconfig/tsconfig.package.json`, usa `moduleResolution: nodenext`, define `rootDir` e `outDir`, e ativa `rewriteRelativeImportExtensions`. O script `compile`/`build` chama `tsc`; os arquivos emitidos incluem declarações para consumidores TypeScript.

## Scripts

- `quick:test`: Node importa `@jeftelabs/exec` e executa `bin/test.ts`.
- `test`: lint via `pretest` e runner sob `c8`.
- `lint`: ESLint.
- `typecheck`: `tsc --noEmit`.
- `compile`: `tsc`.
- `build`: `npm run compile`, com lint via `precompile`.
- `format`: Prettier com escrita.

## Dependências de desenvolvimento

`@t8ngs/*` provê runner/assertions/testes de tipo; `@ark/attest` é usado nos benchmarks; `@jeftelabs/exec` executa TypeScript; ESLint/Prettier e configs ArapucaJS cobrem estilo; TypeScript compila; Husky/commitlint apoiam commits.

## Workflows

- `.github/workflows/checks.yml` valida Conventional Commits; não executa testes de tipo/build no fluxo mostrado.
- `release.yml` executa release-please e constrói/anexa artefato quando a release é criada.
- `labels.yml` sincroniza labels manualmente.
- `stale.yml` aplica política de inatividade a issues e PRs.

Verifique os arquivos de configuração para o estado operacional atual. Não suponha que CI faça verificações além das etapas declaradas.
