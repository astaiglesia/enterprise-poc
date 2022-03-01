const { gql } = require('apollo-server-express');
// define Schema types, inputs, Query and Mutations
const typeDefs = gql`
  type Project {
    _id: ID!
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
    product_id: ID!
    title: String!
    saleType: String!
    category: String!
    color: String
    sku: String!
    variant_price: Int!
    image_src: String!
    image_alt: String!
    created_on: String
  }
  input ProductInput {
    product_id: ID
    title: String
    saleType: String
    category: String
    color: String
    sku: String
  }

  input ProductFilterInput {
    id: ID
    sku: String
    title: String
    option: String
    color: String
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
    products(input: ProductFilterInput): [Product]!
  }

  type Mutation {
    addProject(input: NewProjectInput!): Project!
    editProject(input: EditProjectInput!): Project!
    deleteProject(input: SelectProjectInput!): Project!
    editOrder(input: ProductInput): [Product]!
  }
`;

module.exports = typeDefs;