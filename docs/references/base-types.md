# Referência dos helpers base

Os tipos desta página são exportados via [`index.ts`](../../index.ts) a partir de [`src/base.ts`](../../src/base.ts). São exclusivamente tipos TypeScript.

## Tipos de composição

### `Prettify<T>`

```ts
type Prettify<T> = { [K in keyof T]: T[K] } & {}
```

Remapeia propriedades para uma apresentação mais legível. Não muda intencionalmente o conjunto estrutural aceito.

### `Primitive`

`null | undefined | string | number | boolean | symbol | bigint`.

### `OneOrMore<T>`

`T | T[]`. Não inclui explicitamente `readonly T[]` como ramo.

### `AsyncOrSync<T>`

`PromiseLike<T> | T`; abrange thenables, não apenas instâncias de `Promise`.

### `DeepPartial<T>`

```ts
type DeepPartial<T> = Prettify<{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }>
```

A recursão usa `extends object`, portanto também percorre arrays, funções e objetos especiais. Não há condições dedicadas para preservar suas formas/protocolos; verifique resultados específicos com o compilador.

## Construtores e imports

### `Constructor<T, Arguments = any[]>`

`new (...args: Arguments) => T`. `Arguments` modela a lista de parâmetros do construtor. O default é `any[]`.

### `AbstractConstructor<T, Arguments = any[]>`

`abstract new (...args: Arguments) => T`.

### `NormalizeConstructor<T extends Constructor<any>>`

Remove a propriedade `constructor` de `T` e intersecta um construtor `new (...args: any[]) => InstanceType<T>`. É destinado ao padrão exigido por mixins do TypeScript, conforme comentário no código.

### `LazyImport<DefaultExport>` e `UnWrapLazyImport<Fn>`

`LazyImport<T>` equivale a `() => Promise<{ default: T }>`. `UnWrapLazyImport<Fn>` é `Awaited<ReturnType<Fn>>['default']`, para extrair o tipo do default export.

## Marca opaca

### `Opaque<T, K>`

`T & { [opaqueProp]: K }`, onde `opaqueProp` é um `unique symbol` não exportado. O marcador ajuda a impedir atribuição estrutural direta entre tags diferentes, embora casts `as` possam contorná-lo.

### `UnwrapOpaque<T>`

`T extends Opaque<infer A, any> ? A : never`. O tipo tenta inferir o tipo base; teste unions/aliases mais complexos no compilador consumidor.

## Análise de propriedades

### `ExtractFunctions<T, IgnoreList = never>`

Para cada chave mapeia a chave se ela não estiver em `IgnoreList` e `T[P]` estender `(...args: any[]) => any`; as demais viram `never`, e a indexação produz uma união de chaves.

### `AreAllOptional<T>`

Retorna `true` para `{}`. Para cada chave aplica `[undefined] extends [T[K]]`; se nenhuma chave resultar em valor, retorna `true`. Assim, aceita propriedade obrigatória cujo valor inclui `undefined`, além de propriedades opcionais. Apesar do nome, testa possibilidade de undefined, não apenas o modificador `?`.

### `ExtractUndefined<T>` e `ExtractDefined<T>`

- `ExtractUndefined<T>` inclui chaves para as quais `undefined extends T[K]`.
- `ExtractDefined<T>` inclui chaves para as quais `undefined` não estende `T[K]`.

São complementares em relação à possibilidade de `undefined`, não checam presença runtime nem o modificador sintático opcional.
