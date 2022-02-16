import React from 'react';
import { useQuery } from '@apollo/client';

import styles from './ProjectList.module.css';
import { GET_SNIPPETS } from '../../../../helpers/Queries'

import SnippetCard from '../SnippetCard/SnippetCard';


const ProjectList = () => {
  // mock data serving as initial state in prototype iteration... 
  // -- assuming we can use the id here to query for heavier data loads per project to minimize traffic
  // const mockProfiles = useSelector(state => state.projectList)

  // GraphQL Query to Database
  // - returned data to be mapped to Order Cards
  const { loading, error, data } = useQuery(GET_SNIPPETS);

  console.log(data)

  return (loading) ? <h3> Loading... </h3>
    : (error) ? <h3> `Error! ${error.message}` </h3>
    : (
        <div className={styles.cardlist}>
          {data.projects.map( snippet => (
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