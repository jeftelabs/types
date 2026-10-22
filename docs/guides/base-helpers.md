# Guia dos helpers de tipos base

Todos os nomes abaixo são tipos, não funções. Importe com `import type` para tornar a intenção explícita.

## Simplificar apresentação: `Prettify<T>`

Mapeia `keyof T` para um novo objeto e intersecta `{}`. Use para exibir de forma mais legível uma composição/interseção no editor; isso não altera o conjunto semântico de valores aceitos.

```ts
import type { Prettify } from '@jeftelabs/types'
type User = Prettify<{ id: number } & { name: string }>
```

Os arquivos de exemplo do repositório mostram como a exibição do editor pode mudar: [tipo sem formatação](../../assets/not-prettified.png) e [tipo com `Prettify`](../../assets/prettified.png). O resultado visual depende do editor e da versão TypeScript.

## Valores comuns: `Primitive`, `OneOrMore<T>`, `AsyncOrSync<T>`

`Primitive` inclui `null | undefined | string | number | boolean | symbol | bigint`. `OneOrMore<T>` aceita `T | T[]` (não inclui tuplas não vazias nem arrays readonly explicitamente). `AsyncOrSync<T>` aceita `T | PromiseLike<T>`.

## Marcar tipos opacos: `Opaque<T, K>`

Uma propriedade indexada por `unique symbol` adiciona a marca `K` ao tipo base `T`:

```ts
import type { Opaque, UnwrapOpaque } from '@jeftelabs/types'
type UserId = Opaque<string, 'user-id'>
type RawUserId = UnwrapOpaque<UserId> // string
```

TypeScript ainda permite afirmar o tipo com `as UserId`; o helper não valida valores nem cria uma distinção em JavaScript. A referência [`base-types.md`](../references/base-types.md) descreve detalhes para unions.

## Tipos de construtor e imports lazy

`Constructor<Instance, Args>` modela `new (...args: Args) => Instance`; `AbstractConstructor` modela forma abstrata correspondente. `NormalizeConstructor<T>` reescreve o construtor de `T` para `new (...args: any[]) => InstanceType<T>`, útil para restrições de mixin descritas no comentário de origem.

`LazyImport<Default>` modela `() => Promise<{ default: Default }>`. `UnWrapLazyImport<Fn>` extrai `Awaited<ReturnType<Fn>>['default']`.

## Analisar propriedades

- `ExtractFunctions<T, IgnoreList>` devolve a união de chaves cujos valores são funções, exceto a lista opcional de chaves ignoradas.
- `ExtractUndefined<T>` seleciona chaves cujo tipo inclui `undefined`.
- `ExtractDefined<T>` seleciona chaves cujo tipo não inclui `undefined`.
- `AreAllOptional<T>` retorna `true` para objeto vazio e, conforme a implementação, considera “optional” qualquer propriedade cujo tipo não possa conter `undefined`; veja a observação de nomenclatura na referência.

## `DeepPartial<T>`

Acrescenta `?` em cada propriedade e recursa quando `T[P] extends object`. Isso também recursa em arrays, tuples e outros objetos segundo suas propriedades; não é um helper especializado que preserva explicitamente toda semântica de arrays, funções, `Date`, `Map` ou unions. Confira o resultado em tipos reais e mantenha testes.

Para exemplos completos e detalhes de borda, consulte [`references/base-types.md`](../references/base-types.md).
