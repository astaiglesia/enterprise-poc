import React from 'react';

import styles from './ProjectList.module.css';

import SnippetCard from '../SnippetCard/SnippetCard';

const ProjectList = props => {
  // console.log(props.data.projects)
  

  return (
    <div className={styles.cardlist}>
      {props.data.projects.map( snippet => (
          <SnippetCard key={snippet._id} snippetData={snippet}/>
        ))}
    </div>
  )
};

export default ProjectList;