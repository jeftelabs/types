# `@jeftelabs/types`

> Helpers de tipos TypeScript para aplicações e bibliotecas do ecossistema JefteLabs.

O pacote reúne tipos reutilizáveis para manipular estruturas, construtores, imports lazy e identificadores de rota. Os helpers são resolvidos pelo TypeScript durante a compilação; não formam uma API de funções de runtime.

## Instalação

```sh
npm install @jeftelabs/types
```

## Uso

Importe os tipos diretamente do entry point do pacote:

```ts
import type { DeepPartial, InferRouteParams, Opaque } from '@jeftelabs/types'

type RouteParams = InferRouteParams<'/users/:id/:tab?'>
// { id: string; tab?: string }

type UserId = Opaque<string, 'user-id'>

type ConfigPatch = DeepPartial<{
  http: { enabled: boolean; port: number }
}>
```

## Helpers disponíveis

### Estruturas e propriedades

- `Prettify<T>` normaliza visualmente um tipo mapeando suas propriedades.
- `Primitive` reúne `null`, `undefined`, string, number, boolean, symbol e bigint.
- `OneOrMore<T>` aceita `T` ou `T[]`.
- `DeepPartial<T>` torna propriedades aninhadas opcionais recursivamente para tipos de objeto.
- `AreAllOptional<T>` verifica se as propriedades de topo aceitam `undefined`/são opcionais conforme a implementação.
- `ExtractUndefined<T>` e `ExtractDefined<T>` selecionam chaves pelo pertencimento ou não a `undefined`.
- `ExtractFunctions<T, IgnoreList>` seleciona propriedades que são funções e permite excluir chaves.
- `AsyncOrSync<T>` aceita `T` ou `PromiseLike<T>`.

### Classes e imports

- `Constructor<T, Arguments>` representa um construtor concreto.
- `AbstractConstructor<T, Arguments>` representa um construtor abstrato.
- `NormalizeConstructor<T>` adapta uma assinatura de construtor para o padrão requerido por mixins TypeScript.
- `LazyImport<DefaultExport>` representa função que resolve módulo com export default.
- `UnWrapLazyImport<Fn>` extrai o tipo do default export da função lazy.

### Tipos opacos

- `Opaque<T, K>` adiciona uma marca nominal usando um `unique symbol` interno para distinguir valores estruturalmente iguais.
- `UnwrapOpaque<T>` extrai o tipo subjacente de um `Opaque`.

### Parâmetros de rota

- `InferRouteParams<Identifier>` infere parâmetros `:name`, opcionais `:name?`, parâmetros com extensão como `:file.json` e wildcard `*` do padrão reconhecido pelo tipo.
- Os tipos intermediários `Param`, `ParamSegment`, `OptionalParam`, `OptionalParamSegment`, `WildcardParam` e `WildcardParamSegment` também são exportados por `src/route.ts`.

Os detalhes de inferência e limites estão na [referência da API](./docs/references/api.md); exemplos de uso estão nos [guias](./docs/README.md#guias).

## Documentação

A [documentação completa](./docs/README.md) inclui guias, referências, planejamento, testes e benchmarks. As regras para agentes, incluindo a obrigação de documentar toda mudança, estão em [`AGENTS.md`](./AGENTS.md).

## Desenvolvimento

```sh
npm install
npm run quick:test
npm run lint
npm run typecheck
npm run build
```

O [guia de desenvolvimento](./docs/guides/development.md) descreve os scripts e o fluxo de contribuição. `npm test` inclui lint e cobertura; `npm run format` escreve as alterações de formatação.

## Licença

MIT. Consulte [`LICENSE`](./LICENSE).
