const express = require('express');
const app = express();
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  Gr
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
    projectProfile: {type: ProjectProfileType },
    clientProfile: {type: ClientProfileType },
    billingProfile: {type: BillingProfileType },
    shopifyOrder: {type: OrderType},
  })
})


// ## Connect to Shopify API and determine the available data types for use in our app
// ----- Product Mix
// GQLList
const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: {type: GraphQLString},
    orderNumber: {type: GraphQLString},
    productMix: {type: GraphQLList}
  })
})

// ----- Product Type
const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    option: {type: GraphQLString},
    color: {type: GraphQLString},
    sku: {type: GraphQLString},
    supplyChain: {type: GraphQLString},
    quantity: {type: GraphQLInt},
    term: {type: GraphQLString},
    cost: {type: GraphQLInt},
    // image: {type: GraphQL}
  })
})


// ----- Project Profile
const ProjectProfileType = new GraphQLObjectType({
  name: 'ProjectProfile',
  fields: () => ({
    id: {type: GraphQLString},
    nickname: {type: GraphQLString},
    address: {type: GraphQLString},
    unit: {type: GraphQLString},
    country: {type: GraphQLString},
    state: {type: GraphQLString},
    zip: {type: GraphQLString},
    deliveryDate: {type: GraphQLString},
    notes: {type: GraphQLString},
    tag: {type: GraphQLString},
  })
})

// ----- Client Profile
const ClientProfileType = new GraphQLObjectType({
  name: 'ClientProfile',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    company: {type: GraphQLString},
    address: {type: GraphQLString},
    unit: {type: GraphQLString},
    country: {type: GraphQLString},
    state: {type: GraphQLString},
    zip: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
  })
})

// ----- Billing Profile
const BillingProfileType = new GraphQLObjectType({
  name: 'BillingProfile',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    address: {type: GraphQLString},
    unit: {type: GraphQLString},
    country: {type: GraphQLString},
    state: {type: GraphQLString},
    zip: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
  })
})


// ======== Queries
// ----- Root Query 
// -- each fields property defines an associated nested query
// -- we can/will create more query types as needed
// create project queries for each filter type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // each field is a query definition
  fields: {
    // ---- GET all projects
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentvalue, args){
        return axios.get(`http://localhost:3000/projects/`)
        .then(res => res.data);
      }
    },
    
    // ----- GET a single project, by id
    project: {
      type: ProjectType,
      args: {
        id: {type: GraphQLString},
      },
      resolve(parentvalue, args){
          return axios.get(`http://localhost:3000/projects/${args.id}`)
                      .then(res => res.data);

          // -- ## try to understand using express here / why it doesn't work as expected
          // app.get(`http://localhost:3000/projects/`)
          //     .then(res => res.json)
          //     .then(data => console.log(data))       
        }
      }
    
    // ---- GET order

    }
  }
)


// ====== MUTATIONS
// provide create, update and delete functionality
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // ----- POST a single project, api/db's typically add an id by default
    addProject: {
      type: ProjectType,
      args: {
        orderState: {type: GraphQLString},
        nickname: {type: new GraphQLNonNull(GraphQLString)},
        location: {type: new GraphQLNonNull(GraphQLString)},
        client: {type: new GraphQLNonNull(GraphQLString)},
        company: {type: GraphQLString},
        deliveryDate: {type: GraphQLString},
        rentalTerm: {type: GraphQLString},
        tag: {type: GraphQLString},
      },
      resolve(parentvalue, args){
        return axios.post('http://localhost:3000/projects/', {
          orderState: args.orderState,
          nickname: args.nickname,
          location: args.location,
          client: args.client,
          company: args.company,
          deliveryDate: args.deliveryDate,
          rentalTerm: args.rentalTerm,
          tag: args.tag,
        })
        .then(res => res.data)
      }
    },
    // ----- UPDATE a single project, by id
    editProject: {
      type: ProjectType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        orderState: {type: GraphQLString},
        nickname: {type: GraphQLString},
        location: {type: GraphQLString},
        client: {type: GraphQLString},
        company: {type: GraphQLString},
        deliveryDate: {type: GraphQLString},
        rentalTerm: {type: GraphQLString},
        tag: {type: GraphQLString},
      },
      resolve(parentvalue, args){
        return axios.patch(`http://localhost:3000/projects/${args.id}`, {
          orderState: args.orderState,
          nickname: args.nickname,
          location: args.location,
          client: args.client,
          company: args.company,
          deliveryDate: args.deliveryDate,
          rentalTerm: args.rentalTerm,
          tag: args.tag,
        })
        .then(res => res.data)
      }
    },
    // ----- DELETE a single project, by id
    deleteProject: {
      type: ProjectType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parentvalue, args){
        return axios.delete(`http://localhost:3000/projects/${args.id}`)
        .then(res => res.data)
      }
    }
  }
})


// gql schema accepts a root query as an arg
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
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