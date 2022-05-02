/*
- add mobile responsiveness / media queries
*/ 
import React from "react";
import styles from './ProjectContent.module.css';
import ProjectListContainer from "./ProjectListContainer/ProjectListContainer";

// ###  refactor to pull folder structure one level up??
const ProjectContent = () => {

  return (
    <div className={styles['content-container']}>      
      <ProjectListContainer />
    </div>
  )
};

export default ProjectContent;