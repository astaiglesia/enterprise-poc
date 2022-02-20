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
    projects (input: {orderState: "Draft"}) {
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

export const GET_RESERVEDS = gql`
  query GetReserved {
    projects (input: {orderState: "Reserved"}) {
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
export const GET_DEPOSITS = gql`
  query GetDeposits {
      projects (input: {orderState: "onDeposit"}) {
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

export const GET_APPROVEDS = gql`
  query GetApproveds {
    projects (input: {orderState: "Approved"}) {
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

export const GET_SUBSCRIBEDS = gql`
  query GetSubscribeds {
    projects (input: {orderState: "Subscribed"}) {
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
  GET_DRAFTS, 
  GET_RESERVEDS, 
  GET_DEPOSITS, 
  GET_APPROVEDS, 
  GET_SUBSCRIBEDS
};

export default GQL;