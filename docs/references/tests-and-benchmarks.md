# Referência de testes e benchmarks

## Testes de tipo

[`bin/test.ts`](../../bin/test.ts) configura `@t8ngs/runner` com plugins de `assert`, filesystem e `expectTypeOf`, e procura `tests/**/*.spec.ts`. Os testes verificam igualdade de tipos e algumas incompatibilidades intencionais com `@ts-expect-error`; seu foco é compilação, não execução de lógica runtime.

### Áreas atuais

- [`tests/base.spec.ts`](../../tests/base.spec.ts): construtores, extração de funções, lazy import, opacos, opcionalidade, extração de undefined, normalização de construtor e `DeepPartial`.
- [`tests/route.spec.ts`](../../tests/route.spec.ts): rotas estáticas, params obrigatórios/opcionais, sufixo de extensão, múltiplos segmentos e wildcard.

`npm run quick:test` usa `@jeftelabs/exec`; `npm test` executa lint e `c8` em torno do runner. A cobertura de runtime tradicional pode ser pouco informativa para aliases apagados pelo compilador; as assertions de tipo são a evidência principal de corretude.

## Benchmarks

Os arquivos em `benchmarks/` usam `@ark/attest` e anotam `.types([1, 'instantiations'])`. Os casos atuais exploram `DeepPartial`, `Prettify` e `InferRouteParams`. A `BaseLine` e o número de instanciações ajudam a acompanhar custo de compilação em casos específicos, mas não representam benchmark abrangente de tempo ou memória de todo o pacote.

Ao mudar helpers recursivos ou template literal types, considere adicionar ou atualizar o benchmark correspondente, especialmente se aumentar o tamanho das estruturas ou a quantidade de recursão.

## Manutenção

Mantenha os exemplos de tipo pequenos e explícitos; inclua caso positivo e contraexemplo quando isso definir o contrato. Atualize esta referência e a página específica de API na mesma alteração de código.
