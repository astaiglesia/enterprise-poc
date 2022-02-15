/*
- add mobile responsiveness / media queries
*/ 

import React from "react";

import styles from './ProjectContent.module.css'

import ProjectForm from "../ProjectForm/ProjectForm";
import ProjectListContainer from "../ProjectList/CardListContainer/CardListContainer";


const Content = () => {
  
  return (
    <div className={styles.container}>
      <ProjectForm />
      <ProjectListContainer />
    </div>
  )
};

export default Content;