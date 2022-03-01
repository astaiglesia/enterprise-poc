import { gql } from '@apollo/client';

export const GET_SNIPPETS = gql`
  query GetSnippets {
    projects {
      _id
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
      _id
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
      _id
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
      _id
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
      _id
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
      _id
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

export const GET_PRODUCTSTORE = gql`
  query GetProductStore {
    products {
      product_id
      title
      saleType
      category
      color
      sku
      variant_price
      image_src
      image_alt
    }
  }
`;

const GQL = {
  GET_SNIPPETS, 
  GET_DRAFTS, 
  GET_RESERVEDS, 
  GET_DEPOSITS, 
  GET_APPROVEDS, 
  GET_SUBSCRIBEDS,
  GET_PRODUCTSTORE
};

export default GQL;