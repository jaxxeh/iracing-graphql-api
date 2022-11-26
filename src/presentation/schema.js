import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const typeDefs = []

glob.sync('**/*.type.graphql', { cwd: __dirname }).forEach((filename) => {
  const filePath = path.join(__dirname, filename)
  const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
  typeDefs.push(fileContents)
})

import resolvers from './resolvers.js'

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
