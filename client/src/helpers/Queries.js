import { gql } from '@apollo/client';

export const GET_SNIPPETS = gql`
  query GetSnippets {
    projects {
      id
      orderState
      nickname
      location
      client
      company
      rentalTerm
      tag
    }
  }
`;

export const GET_DRAFTS = gql`
  query GetDrafts {
    sortedState(orderState: "Draft") {
      id
      orderState
      nickname
      location
      client
      company
      deliveryDate
      rentalTerm
      tag
    }
  }
`;


const GQL = {
  GET_SNIPPETS, 
  GET_DRAFTS
};

export default GQL;