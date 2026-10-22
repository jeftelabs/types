# Estado atual e critérios de evolução

## Escopo observado

O pacote fornece helpers de tipos gerais e de inferência simples de parâmetros de rota. O escopo é confirmado pelos exports de `index.ts`, definições em `src/` e testes em `tests/`. O repositório contém benchmarks de instanciação para alguns helpers.

Esta página não anuncia funcionalidades futuras, datas ou compromissos. Registra como avaliar mudanças sem presumir um roadmap aprovado.

## Critérios para propostas

Ao sugerir um helper ou modificar um existente, descreva:

1. O caso TypeScript concreto e o tipo de saída pretendido.
2. Semântica em presença de `any`, `never`, unions, nullability, readonly, arrays/tuples e propriedades opcionais, quando relevante.
3. A faixa de versões/compilador que precisa suportar e o efeito das opções TypeScript consumidoras.
4. Custo de instanciação para tipos recursivos/template literal e benchmark correspondente.
5. Testes positivos/negativos, atualização de documentação e impacto em exports/versionamento.

## Mapa de documentação afetada

- Helper geral: `references/base-types.md` e `guides/base-helpers.md`.
- Inferência de rota: `references/route-types.md` e `guides/route-params.md`.
- Cobertura/medição: `references/tests-and-benchmarks.md` e `guides/development.md`.
- Publicação/configuração: `references/package-and-build.md`.
- Descoberta: `docs/README.md` e README raiz.

## Manutenção

Só publique uma lista como roadmap comprometido com decisão expressa do mantenedor. Ao atualizar o escopo atual, cite as definições e testes que sustentam a descrição e atualize este documento junto com a alteração.
