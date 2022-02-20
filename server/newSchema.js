const { gql } = require('apollo-server-express');
// define Schema types, inputs, Query and Mutations
const typeDefs = gql`
  type Project {
    id: ID!
    orderState: String!
    nickname: String!
    location: String!
    client: String!
    company: String
    deliveryDate: String
    rentalTerm: String
    tag: String
    
  }

  type Product {
    id: ID!
    sku: String!
    title: String!
    option: String!
    color: String!
    supplyChain: String!
  }

  input ProductInput {
    id: ID
    sku: String
    title: String
    option: String
    color: String
    supplyChain: String
  }

  input ProjectFilterInput {
    orderState: String
    searchField: String
  }

  input NewProjectInput {

    orderState: String!
    nickname: String!
    location: String!
    client: String!
    company: String
    deliveryDate: String
    rentalTerm: String
    tag: String
  }

  input EditProjectInput {
    orderState: String
    nickname: String
    location: String
    client: String
    company: String
    deliveryDate: String
    rentalTerm: String
    tag: String
  }

  input SelectProjectInput {
    id: ID!
  }

  type Query {
    projects(input: ProjectFilterInput): [Project]!
    singleProject(input: SelectProjectInput!): Project!
    productSelection(input: ProductInput): [Product]!
  }

  type Mutation {
    addProject(input: NewProjectInput!): Project!
    editProject(input: EditProjectInput!): Project!
    deleteProject(input: SelectProjectInput!): Project!
    editOrder(input: ProductInput): [Product]!
  }
`;

module.exports = typeDefs;