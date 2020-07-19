import { GraphQLServer } from 'graphql-yoga'

import db from './db'
import resolvers from './resolvers'

console.log(resolvers)

const server = new GraphQLServer({
  typeDefs: './src/types/index.graphql',
  resolvers,
  context: {
    db,
  },
})

server.start(() => console.log('---Server is Up---'))
