const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');



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
    rentalTerm: {type: GraphQLString},
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
// create project queries for each filter type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // each field is a query definition
  fields: {
    // queries all projects -> evaluates to a list
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentvalue, args){
        return mockProjects;
      }
    },
    // queries a single project, by id
    project: {
      type: ProjectType,
      args: {
        id: {type: GraphQLString},
      },
      resolve(parentvalue, args){
        for (let i = 0; i < mockProjects.length; i++) {
          if (mockProjects[i].id == args.id) return mockProjects[i];
        }
      }
    },
  }
})



// gql schema accepts a root query as an arg
module.exports = new GraphQLSchema({
  query: RootQuery,
})





// ======== Test Query with Hard-Coded Data
// ======== Hardcoded data for schema testing
// const mockProjects = [
//   { id: "1",
//     orderState: 'Draft',
//     nickname: 'Google Tribeca',
//     location: 'New York City',
//     client: 'Alfie S',
//     company: 'Vaulted Oak',
//     deliveryDate: new Date(2022, 5, 15),
//     rentalTerm: '12 months',
//     tag: 'Breakout Spaces',
    
//     // --- properties for additional functionality
//     // clientProfile: {clientObject: 'to be created'},
//     // billingInformation: {billingObject: 'to be created'},
//     // productList: [],
//   },
//   { id: "2",
//     orderState: 'Reserved',
//     nickname: 'Blackrock Hudson Yards',
//     location: 'New York City',
//     client: 'Alfie S',
//     company: 'Vaulted Oak',
//     deliveryDate: new Date(2022, 1, 15),
//     rentalTerm: '12 months',
//     tag: 'Guest Lounges',

//     // --- properties for additional functionality
//     // clientProfile: {clientObject: 'to be created'},
//     // billingInformation: {billingObject: 'to be created'},
//     // productList: [],
//   },
//   { id: "3",
//     orderState: 'Draft',
//     nickname: 'Wework Vesey St',
//     location: 'New York City',
//     client: 'Fake Client',
//     company: 'WeWork',
//     deliveryDate: new Date(2022, 7, 15),
//     rentalTerm: '12 months',
//     tag: 'Common Areas',

//     // --- properties for additional functionality
//     // clientProfile: {clientObject: 'to be created'},
//     // billingInformation: {billingObject: 'to be created'},
//     // productList: [],
//   },
// ];


// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   // each field is a query definition
//   fields: {
//     // queries all projects -> evaluates to a list
//     projects: {
//       type: new GraphQLList(ProjectType),
//       resolve(parentvalue, args){
//         return mockProjects;
//       }
//     },
//     // queries a single project, by id
//     project: {
//       type: ProjectType,
//       args: {
//         id: {type: GraphQLString},
//       },
//       resolve(parentvalue, args){
//         for (let i = 0; i < mockProjects.length; i++) {
//           if (mockProjects[i].id == args.id) return mockProjects[i];
//         }
//       }
//     },
//   }
// })