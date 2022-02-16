// import React, { useState } from 'react';
// import { gql, useQuery } from '@apollo/client';

// import styles from './ProjectList.module.css';
// // import { GET_SNIPPETS } from '../../../../helpers/Queries';

// import SnippetCard from '../SnippetCard/SnippetCard';


// const ProjectList = () => {
//   const ALL_SNIPPETS = gql`
//     query AllSnippets {
//       projects {
//         id
//         orderState
//         nickname
//         location
//         client
//         company
//         rentalTerm
//         tag
//       }
//     }
//   `;
  

    
//   const [queryArg, setQueryArg] = useState(ALL_SNIPPETS);


//   // GraphQL Query to Database
//   // - returned data to be mapped to Order Cards
//   const { loading, error, data } = useQuery(queryArg);

//   console.log(data)

//   return (loading) ? <h3> Loading... </h3>
//     : (error) ? <h3> `Error! ${error.message}` </h3>
//     : (
//         <div className={styles.cardlist}>
//           {data.projects.map( snippet => (
//               <SnippetCard key={snippet.id} snippetData={snippet}/>
//             ))}
//         </div>
//       )
// };
 

// export default ProjectList;



// /* ##
// - fetch list from database
// - add search/filter 
// - sort by heading (on heading click)
// - add scroll / pagination
// */ 