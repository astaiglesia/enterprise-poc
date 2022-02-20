const { gql } = require('apollo-server');


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

  input ProjectFilterInput {
    orderState: String
    searchField: String
  }

  input NewProjectInput {
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

  input DeleteProjectInput {
    id: ID!
  }

  type Query {
    projects(input: ProjectFilterInput): [Project]!
  }

  type Mutation {
    addProject(input: NewProjectInput!): [Project]!
    deleteProject(input: DeleteProjectInput!): Project!
  }
`;

module.exports = typeDefs;