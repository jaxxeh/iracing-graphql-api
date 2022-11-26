import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import schema from './presentation/schema.js'

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    headers: req.headers,
  }),
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
