// https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./apolloAPI/typeDefs');
const resolvers = require('./apolloAPI/resolvers');

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://sunsetsessions:Flojan139@cluster0.1p6ob.mongodb.net/zzPOC?retryWrites=true&w=majority';


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
  
  // client entry point for our graphQL server
  apolloServer.applyMiddleware({ app });
  
  app.use((req, res) => {
    res.send("Express Server Started")
  })
  
  const PORT = process.env.PORT || 5000;
  
  // connect to database
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'costs'
  })
    .then(() => console.log(`Connected to Mongo DB on port ${PORT}`))
    .catch(err => console.log(err));


  // spin up the server
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Express + GraphQL servers are live and listening on port 5000. \n GraphiQL playground is available at http://localhost:5000${apolloServer.graphqlPath}`)
  );
};

initServer();



// --- Create User Login && Test Connection to Mongo
// const User = require('./models/user');

// async function createUser(username, password = admin) {
//   return new User({
//     username,
//     password,
//     created: Date.now()
//   }).save()
// }

// async function findUser(username) {
//   return await User.findOne({ username })
// }

// ;(async () => {
//   const connector = mongoose.connect(MONGO_URI)
//   const username = process.argv[2].split('=')[1]
//   const password = process.argv[3].split('=')[1]

//   let user = await connector.then(async () => {
//     return findUser(username)
//   })

//   if (!user) {
//     user = await createUser(username, password)
//   }

//   console.log(user)
//   process.exit(0)
// })()

// process.argv returns
// argv: [
//   '/home/computron/.nvm/versions/node/v16.9.1/bin/node',
//   '/home/computron/github/levelUp/zzPOC/server/server.js',
//   '--user=baritone',
//   '--password=billybob'
// ],