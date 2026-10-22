# Referência dos helpers de rota

Os tipos estão em [`src/route.ts`](../../src/route.ts) e são reexportados pelo entry point. Eles não executam parsing em runtime.

## `Param<Segment>`

- Segmentos que correspondem a `:${string}?` não são obrigatórios (`never`).
- Segmentos que começam com `:` capturam o nome e, se o capturado contiver `.`, usam apenas a parte anterior ao primeiro ponto.
- Outros segmentos retornam `never`.

## `ParamSegment<Identifier>`

Separa recursivamente o identificador em segmentos pelo primeiro `/`, combina `Param` de cada segmento por união e assim obtém as chaves obrigatórias.

## `OptionalParam<Segment>` e `OptionalParamSegment<Identifier>`

`OptionalParam` reconhece um segmento inteiro `:${ParamName}?` e captura `ParamName`. O tipo de segmento recursa por `/` e combina os nomes reconhecidos.

## `Wildcard<Segment>` e `WildcardParamSegment<Identifier>`

`Wildcard` retorna o literal `'*'` se o segmento for exatamente `*`, senão `never`. O tipo de segmento combina estes nomes ao longo da rota.

## `InferRouteParams<Identifier>`

Combina os três grupos com `Prettify`:

- params obrigatórios: propriedade `string`;
- params opcionais: propriedade opcional `string`;
- wildcard: propriedade `'*'` do tipo `string[]`.

Exemplos confirmados em `tests/route.spec.ts`:

| Identificador | Tipo inferido |
| --- | --- |
| `'/users'` | `{}` |
| `'/users/:id'` | `{ id: string }` |
| `'/users/:id?'` | `{ id?: string }` |
| `'/users/:id/:slug?'` | `{ id: string; slug?: string }` |
| `'/users/:id.json'` | `{ id: string }` |
| `'/users/*'` | `{ '*': string[] }` |

O reconhecimento é lexical e simples. Segmentos repetidos podem produzir chaves repetidas depois da união; múltiplos parâmetros num segmento, wildcard nomeado, query string, escapes ou sintaxes específicas de frameworks não são validados pelos testes atuais.
