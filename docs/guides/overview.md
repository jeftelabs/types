# Visão geral

## Propósito

`@jeftelabs/types` concentra aliases TypeScript reutilizáveis pelo ecossistema de bibliotecas. Ele oferece transformações e seletores de tipos para objetos e classes, tipos opacos, construtores, importação lazy, valores síncronos/assíncronos e parâmetros extraídos de identificadores de rota.

São helpers de compilação. A API pública é composta por tipos; não há funções para invocar em runtime.

## Organização do código

- [`index.ts`](../../index.ts) reexporta os tipos de `src/base.ts` e `src/route.ts`.
- [`src/base.ts`](../../src/base.ts) contém utilitários gerais de tipos.
- [`src/route.ts`](../../src/route.ts) extrai segmentos de rota por template literal types.
- `tests/` valida os resultados pelo plugin `expectTypeOf`.
- `benchmarks/` contém casos Ark Attest para observar instanciações de tipos em transforms selecionados.
- `tsconfig.json` configura compilação e reescrita de imports; `package.json` define build/publicação.

## Grupos de helpers

1. **Composição e apresentação:** `Prettify`, `Primitive`, `OneOrMore`, `AsyncOrSync` e `DeepPartial`.
2. **Construtores e imports:** `Constructor`, `AbstractConstructor`, `NormalizeConstructor`, `LazyImport` e `UnWrapLazyImport`.
3. **Marcas opacas:** `Opaque` e `UnwrapOpaque`.
4. **Seleção e análise de propriedades:** `ExtractFunctions`, `AreAllOptional`, `ExtractUndefined` e `ExtractDefined`.
5. **Rotas:** `InferRouteParams` e seus tipos intermediários para parâmetros obrigatórios, opcionais e wildcard.

## Como ler a documentação

Use os guias para receitas de aplicação e as referências para assinaturas, detalhes condicionais e limites. A documentação é derivada dos tipos e testes atuais; recursos do `README copy.md` só são aplicáveis quando o projeto local os exporta.

## Limites gerais

Resultados dependem da versão e das opções do TypeScript consumidor. Helpers recursivos ou template literal podem aumentar o custo do compilador. O pacote não faz validação de rotas em runtime, não transforma objetos e não cria marcas em valores em runtime. Consulte a documentação específica de cada helper antes de assumir semântica além da definição de tipo.
