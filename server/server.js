// https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/

const express = require('express');
const cors = require('cors');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./apolloAPI/typeDefs');
const resolvers = require('./apolloAPI/resolvers');


async function initServer() {
  const app = express();
  // allow cross-origin access to localhost JSON server
  app.use(cors());
  
  // serves static assets
  app.use(express.static(`../client/build`));
  
  // to parse form data use urlencoded middleware ->  parses incoming data with urlencoded payloads, applied to all requests
  app.use(express.urlencoded({ extended: true }));
  
  // parse incoming json data 
  app.use(express.json());
  
  
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  
  await apolloServer.start();
  
  // client entry point for our graphQL server
  apolloServer.applyMiddleware({ app });
  
  app.use((req, res) => {
    res.send("Express Server Started")
  })
  
  const PORT = process.env.PORT || 5000;
  
  // spin up the server
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Express + GraphQL servers are live and listening on port 5000. \n GraphiQL playground is available at http://localhost:5000${apolloServer.graphqlPath}`)
  );
};

initServer();