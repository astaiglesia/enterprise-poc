const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');


// ======== Hardcoded data for schema testing


// ======== Object Types
// ----- Project Type 
// -- defines the data types contained within our Project data type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {type: GraphQLString},
    orderState: {type: GraphQLString},
    nickname: {type: GraphQLString},
    location: {type: GraphQLString},
    client: {type: GraphQLString},
    company: {type: GraphQLString},
    deliveryDate: {type: GraphQLString},
    rentalTerm: {type: GraphQLInt},
    tag: {type: GraphQLString},
  })
})


// ## Connect to Shopify API and determine the available data types for use in our app
// ----- Product Type



// ----- Order Type



// ----- Client Type



// ======== Queries
// ----- Root Query 
// -- each fields property defines an associated nested query
// -- we can/will create more query types as needed
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    project: {
      type: ProjectType
    },
    // product: {
    //   type: ProjectType
    // },
    // order: {
    //   type: ProjectType
    // },
    // client: {
    //   type: ProjectType
    // },
  }
})



// gql schema accepts a root query as an arg
module.exports = new GraphQLSchema({

})