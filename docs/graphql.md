# GraphQL+Express Server
this is the first step to setting up a fully provisioned backend
we will use JSON server as our temporary store of data feeding our app
- JSON server mocks a RESTful API to which our G+E server can send HTTP requests 

## Next Steps
- Replace our JSON server and make true connections to API and database resources
- Setup Apollo Client on the front end to send HTTP requests from the client to this server



## Setup Dependencies & File Structure
We are assuming a concurrent Front End heirarchy and will set up a separate server structure with package JSON. This modularization enhances code readability, maintainability and separaton of concerns

we also assume that you're running a contemporary version of NodeJS already

- encapsulate the front end fie structure in a folder named client (or similar)
- mkdir server
  - mpn init with an entry point of server.js
  - touch server.js
  - mkdir assets 
    - (this will initially hold our mockdata for JSON server to feed our application)
  - npm i express express-graphql nodemon graphql --save

## Instantiate Your Express Server
Let's spin up a server
- require in express, create an express instance and fire up that server
- destructure graphqlHTTP from the express-graphql library(aliased as gHTTP moving forward) library
- create an entry point for the client to interact with GraphQL ('/graphql')
  - pass an invocation of gHTTP as middleware into .use 
    - gHTTP accepts a config object arg
      - config object will define schema and graphiql properties
      - schema will define the bulk of the graphql server structure and will be codesplit in a separate file, schema.js
- require in the schema module


## Define the GQL Schema
Now to define our schema.js file which will export a new instance of GQLSchema

- require in the GQL ObjectType, Schema, List, NonNull and any other data types that you're expecting to work with 
  
  ### Define the Object Types
  Here we create a GQL data type and define and type the properties it will hold 
  - assign a gqlobject to a binding and pass in a confic object
    - fields prop should define a callback which evaluates to an object of properties with datatype vals

  ### Create the Root Query
  - instantiate another GQLObjectType and assign to a RootQuery binding 
  - pass args to our root query
     - args will be the properties and data types that we want to use in our query
  - pass in resolver functions -> i.e. the logic to be carried out on the returned data
    - e.g. pass to res object, additional calculation/manipulation, etc
  - we will pass this root query into our GQLSchema instance

  ## Add hard-coded data for testing our schema
  Before connecting to a live database or api, we want to isolate our variables and test out our server to make sure that it works as expected

  ## test out the server on graphiql
  - navigate your browser to http://localhost:4000/graphql

- export a new instance of GQLSchema, passing in a config object whose property vals are defined just above


## Setup JSON Server to mock an actual REST API, providing real responses to HTTP requests from our server
- install json server
- add json server start script
- touch data.json 
- install axios
- edit resolvers to return GET requests 
- add mutation resolvers for POST, DELETE and UPDATE logic



## Use Axios to connect to a real database
