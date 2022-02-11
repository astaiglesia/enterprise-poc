import React from "react";

import styles from './Content.module.css';

import ProjectForm from "../../features/ProjectForm/ProjectForm";
import CardListContainer from "../../features/ProjectList/CardListContainer/CardListContainer";


const Content = () => {
  
  return (
    <div className={styles.container}>
      <ProjectForm />
      <CardListContainer />

    </div>
  )
};

export default Content;