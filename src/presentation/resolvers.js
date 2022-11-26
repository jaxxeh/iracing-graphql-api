import QueryResolver from './Query/Query.resolvers.js'
import MutationResolver from './Mutation/Mutation.resolvers.js'

export default {
  ...QueryResolver,
  ...MutationResolver,
}
