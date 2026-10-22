# Guia de inferência de parâmetros de rota

`InferRouteParams<Identifier>` lê um identificador literal de rota em tempo de compilação e produz propriedades string para segmentos paramétricos. Importe-o como tipo:

```ts
import type { InferRouteParams } from '@jeftelabs/types'

type Params = InferRouteParams<'/users/:id/:tab?'>
// { id: string; tab?: string }
```

## Sintaxe reconhecida

- Segmento `:name`: chave obrigatória `name: string`.
- Segmento `:name?`: chave opcional `name?: string`.
- Segmento `:name.ext`: a extensão é descartada, produzindo chave `name: string`.
- Segmento `*`: chave `'*': string[]`.
- Segmentos separados por `/` são processados recursivamente e suas chaves são combinadas.

O teste existente confirma `/users/:id.json` como `{ id: string }`, e não cobre múltiplos params dentro do mesmo segmento.

## Limitações

Este tipo é um parser simples de segmentos baseado em template literal types, não uma implementação de roteador. Wildcard é somente o segmento literal `*`; parâmetros opcionais são reconhecidos quando o segmento inteiro tem forma `:name?`; os segmentos são divididos por `/`. Extensões são removidas do nome do parâmetro obrigatório na primeira porção após ponto. Sintaxes como catch-all nomeado, constraints, escapes e query strings não estão definidas/testadas.

As exportações intermediárias `ParamSegment`, `Param`, `OptionalParamSegment`, `OptionalParam`, `WildcardParamSegment` e `WildcardParam` permitem composições próprias. Consulte [referência de rota](../references/route-types.md) e os testes antes de usar formatos mais complexos.
