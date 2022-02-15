const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js')

const server = express();

// allow cross-origin
server.use(cors());


// client entry point for our graphQL server
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// spin up the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Express + GraphQL server is live and listening on port ${PORT}`))