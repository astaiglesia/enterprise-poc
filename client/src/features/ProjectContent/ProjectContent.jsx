/*
- add mobile responsiveness / media queries
*/ 

import React from "react";

import styles from './ProjectContent.module.css'

import ProjectForm from "./ProjectForm/ProjectForm";
import ProjectListContainer from "./ProjectList/CardListContainer/CardListContainer";


const ProjectContent = () => {
  
  return (
    <div className={styles['content-container']}>
      <ProjectForm />
      <ProjectListContainer />
    </div>
  )
};

export default ProjectContent;