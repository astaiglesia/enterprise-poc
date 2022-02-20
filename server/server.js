// https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./newSchema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

// allow cross-origin access to localhost JSON server
app.use(cors());

// client entry point for our graphQL server

server.applyMiddleware({ app });

// spin up the server
// const PORT = process.env.PORT || 5000;

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Express + GraphQL server is live and listening on port 5000 ${server.graphqlPath}`)
);