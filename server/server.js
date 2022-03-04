// https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./apolloAPI/typeDefs');
const resolvers = require('./apolloAPI/resolvers');

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const MONGO_URI = `mongodb+srv://sunsetsessions:${process.env.MONGO_PW}@zzpoc.8xin3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const pg = require('pg');
const POSTGRES_URI = "postgres://nzfntweq:mta7uBHXIYGmMGRrdnXUbRGRu6_V56Z9@jelani.db.elephantsql.com/nzfntweq";
const elephant = new pg.Client(POSTGRES_URI);

async function initServer() {
  const app = express();
  // allows cross-origin access 
  app.use(cors());
    
  // to parse form data use urlencoded middleware ->  parses incoming data with urlencoded payloads, applied to all requests
  app.use(express.urlencoded({ extended: true }));
  
  // parse incoming json data 
  app.use(express.json());
  
  // serves static assets
  app.use(express.static(`../client/build`));
  
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  
  await apolloServer.start();
  
  // client entry point for graphQL server
  apolloServer.applyMiddleware({ app });
  
  // connection to project database
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
        app.listen({ port: PORT }, () =>
        console.log(`Connection Successful to Mongo DB \n 🚀 Express + GraphQL servers are live and listening on port ${PORT}. \n GraphiQL playground is available at http://localhost:5000${apolloServer.graphqlPath}`)
      );
    })
    .catch(err => console.error(err));



  // connection to storefront database
  // query works from here
  // identify appraoch to perform query within the resolver
  elephant.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    console.log('Connected Successfully to ElephantSQL for Storefront Database')
    elephant.query('SELECT * FROM products', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result)
      elephant.end();
    });
    
  });
};

initServer();

// console.log(elephant.query)
