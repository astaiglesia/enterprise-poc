const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')

const server =  express();

// client entry point for our graphQL server
server.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

// spin up the server
const port = 4000;
server.listen(port, () => console.log(`Express + GraphQL server is live and listening on port ${port}`))