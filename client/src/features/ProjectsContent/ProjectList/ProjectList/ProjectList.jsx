import React from 'react';
import { useQuery } from '@apollo/client';

import styles from './ProjectList.module.css';

import SnippetCard from '../SnippetCard/SnippetCard';

// define logic (conditional state??, Switch??) to redefine query and mapping based on filter button clicks


const ProjectList = props => {
  console.log(props.filter.definitions[0].name.value === 'GetSnippets')
  // mock data serving as initial state in prototype iteration... 
  // -- assuming we can use the id here to query for heavier data loads per project to minimize traffic
  // const mockProfiles = useSelector(state => state.projectList)

  // GraphQL Query to Database
  // - returned data to be mapped to Order Cards
  // const { loading, error, data } = useQuery(GET_SNIPPETS);
  // const { loading, error, data } = useQuery(GET_RESERVED);
  
  const { loading, error, data } = useQuery(props.filter);
  if (loading) return <h3> Loading... </h3>;
  if (error) return <h3> `Error! ${error.message}` </h3>;
  

  const projectList = (props.filter.definitions[0].name.value === 'GetSnippets') ? data.projects : data.sortedState;


  return (
        <div className={styles.cardlist}>
          {/* {data.projects.map( snippet => ( */}
          {projectList.map( snippet => (
              <SnippetCard key={snippet.id} snippetData={snippet}/>
            ))}
        </div>
      )
};


export default ProjectList;



/* ##
- fetch list from database
- add search/filter 
- sort by heading (on heading click)
- add scroll / pagination
*/ 