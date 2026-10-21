import { assert } from '@t8ngs/assert'
import { fileSystem } from '@t8ngs/fs'
import { expectTypeOf } from '@t8ngs/expect-type'
import { configure, processCLIArgs, run } from '@t8ngs/runner'

processCLIArgs(process.argv.splice(2))
configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [assert(), fileSystem(), expectTypeOf()],
})

run()
