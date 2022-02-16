/*
- add mobile responsiveness / media queries
*/ 

import React, { useState } from "react";

import styles from './ProjectContent.module.css';

import ProjectForm from "./ProjectForm/ProjectForm";
import ProjectListContainer from "./ProjectList/CardListContainer/CardListContainer";


const ProjectContent = () => {
  const [isSidebarOpen, setIsSidebarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={styles['content-container']}>
      {(isSidebarOpen) && <ProjectForm />}
      <ProjectListContainer toggleSidebar={toggleSidebar} />
    </div>
  )
};

export default ProjectContent;