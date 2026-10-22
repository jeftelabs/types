# Desenvolvimento e manutenção

## Instalação e configuração

O pacote usa Node.js, npm e TypeScript; dependências estão em `package.json` e lockfile em `package-lock.json`. [`tsconfig.json`](../../tsconfig.json) estende `@arapucajs/tsconfig/tsconfig.package.json`, usa `moduleResolution: nodenext`, emite em `build/` e ativa `rewriteRelativeImportExtensions`.

## Comandos do projeto

| Comando | Efeito |
| --- | --- |
| `npm run quick:test` | Executa `bin/test.ts` via `@jeftelabs/exec`. |
| `npm test` | Executa lint pelo `pretest` e os testes com relatório `c8`. |
| `npm run lint` | Executa ESLint. |
| `npm run typecheck` | Executa `tsc --noEmit`. |
| `npm run compile` | Executa `tsc` para emitir saída e declarações. |
| `npm run build` | Encaminha para `compile` (com lint por `precompile`). |
| `npm run format` | Executa Prettier e modifica arquivos. |

Confira `package.json` antes de usar/recomendar comandos.

## Alterar helpers de tipos

1. Leia a definição atual em `src/` e os casos em `tests/`.
2. Considere `strictNullChecks`, optional properties, unions, `any`, `never`, intersections, readonly/tuples, interfaces e versão TypeScript consumidora conforme aplicável.
3. Atualize testes de tipo para os resultados pretendidos e casos de borda.
4. Atualize benchmark relevante se o padrão puder afetar significativamente a instanciação/tempo de compilação.
5. Atualize docs de guia/referência e README quando a API pública mudar.

Testes aqui são, em grande parte, testes do compilador: o sucesso significa que o tipo inferido coincide com as assertions. Eles não validam um comportamento JavaScript correspondente.

## Benchmarks

`benchmarks/` usa `@ark/attest` para comparar/medir instâncias de tipos. Os arquivos declaram uma `BaseLine`, exercitam tipos dentro de `bench(...)` e registram contagens com `.types([1, 'instantiations'])`. Consulte a referência de testes/benchmarks para limites do que esses números significam.

## Build e pacote publicado

O `tsc` compila com as opções do tsconfig. `package.json` publica `build`, exclui `build/bin` e `build/tests`, e define `build/index.js` como `main` e export raiz. Os tipos TypeScript em `build` são consumidos pelas ferramentas de resolução de tipos.

## CI e release

- `.husky/pre-commit` executa `npm test` localmente.
- `.github/workflows/checks.yml` valida mensagens Conventional Commits em PRs e pushes para `main`; não roda testes ou build no workflow atual.
- `release.yml` aciona release-please ao fazer push em `main` e pode anexar o tarball da compilação.
- `labels.yml` sincroniza labels manualmente; `stale.yml` trata issues/PRs sem atividade.

Verifique arquivos de workflow em si quando a automação mudar. A atualização de documentação é obrigatória para toda mudança no repositório.
