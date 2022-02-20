import React from 'react';

import styles from './ProjectList.module.css';

import SnippetCard from '../SnippetCard/SnippetCard';

const ProjectList = props => {
  // assigns the proper query data property
  // console.log(props.data.projects)
  const projectList = props.data.projects;

  return (
    <div className={styles.cardlist}>
      {projectList.map( snippet => (
          <SnippetCard key={snippet.id} snippetData={snippet}/>
        ))}
    </div>
  )
};

export default ProjectList;