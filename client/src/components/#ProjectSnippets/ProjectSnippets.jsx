import React from 'react';

import { gql, useQuery } from '@apollo/client';

// define our query
const GET_SNIPPETS = gql`
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

// create a component with the returned query data
/* loading is a boolean - use for a spinner */
const Snippets = ({ onSnippetSelected }) => {
  
  const { loading, error, data } = useQuery(GET_SNIPPETS);

  if(loading) return 'Loading...';
  if(error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <select name="snippet" onChange={onSnippetSelected}>
      {data.projects.map(project => (
        <option key={project.id} value={project.nickname}>
          {project.nickname}
        </option>
      ))}
    </select>
  );
};

export default Snippets;