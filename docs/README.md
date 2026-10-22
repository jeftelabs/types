# Documentação de `@jeftelabs/types`

Esta documentação descreve os tipos exportados pelo pacote conforme a implementação e os testes de compilação. A assinatura real do TypeScript e os resultados verificados pelos testes são a fonte definitiva.

## Comece aqui

- [Visão geral](./guides/overview.md): objetivos, estrutura e grupos de tipos.
- [Uso dos helpers base](./guides/base-helpers.md): exemplos de `DeepPartial`, `Opaque`, construtores, lazy imports e utilitários de propriedades.
- [Inferência de rotas](./guides/route-params.md): sintaxe suportada por `InferRouteParams`.
- [Desenvolvimento](./guides/development.md): testes de tipos, benchmarks, build e publicação.

## Guias

| Documento | Conteúdo |
| --- | --- |
| [Visão geral](./guides/overview.md) | Escopo e mapa do pacote. |
| [Helpers base](./guides/base-helpers.md) | Receitas para tipos gerais. |
| [Parâmetros de rota](./guides/route-params.md) | Inferência de params a partir de padrões string. |
| [Desenvolvimento](./guides/development.md) | Manutenção e verificações. |

## Referências

| Documento | Conteúdo |
| --- | --- |
| [Helpers base](./references/base-types.md) | Tipos de `src/base.ts`, assinaturas e limitações. |
| [Helpers de rota](./references/route-types.md) | Tipos de `src/route.ts` e parser de segmentos. |
| [Pacote e build](./references/package-and-build.md) | Exports, compilador, scripts e workflows. |
| [Testes e benchmarks](./references/tests-and-benchmarks.md) | Contratos validados e medições de tipos. |

## Planning

| Documento | Conteúdo |
| --- | --- |
| [Estado e critérios de evolução](./planning/roadmap.md) | Escopo observado e critérios para propostas futuras; sem promessas de roadmap. |

## Para agentes de IA

Leia [`../AGENTS.md`](../AGENTS.md) e [`../CLAUDE.md`](../CLAUDE.md). Toda criação ou modificação do projeto precisa de documentação detalhada na mesma tarefa; registre novas páginas neste índice.
