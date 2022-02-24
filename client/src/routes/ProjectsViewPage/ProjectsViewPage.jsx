/**
 * ********************************************************
 *
 * @module  App
 * @author  astaiglesia
 * @date    2022
 * @description Projects List and Creator View
 *
 * ********************************************************
 */

import React from 'react';

import styles from "./ProjectsViewPage.module.css"

import MainHeader from '../../components/MainHeader/MainHeader';
import MainFooter from '../../components/MainFooter/MainFooter';
import Content from '../../features/ProjectsContent/ProjectContent';

const ProjectViewPage = () => {

  return (
    <div className={styles.pages}>
      <MainHeader />
      <Content />
      <MainFooter />
    </div>
  )
};

export default ProjectViewPage;