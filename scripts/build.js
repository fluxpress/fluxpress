process.env.NODE_ENV = 'production'

import { copy, remove } from 'fs-extra'

await remove('bin')
await remove('dist')

await copy('node_modules/@fluxpress/core/dist/', 'dist/')
await copy('node_modules/@fluxpress/cli/dist/', 'dist/')
await copy('node_modules/@fluxpress/cli/bin/', 'bin/')