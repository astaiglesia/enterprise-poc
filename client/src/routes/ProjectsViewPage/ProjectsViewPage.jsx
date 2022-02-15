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
import MainHero from '../../components/MainHero/MainHero';
import MainFooter from '../../components/MainFooter/MainFooter';
import Content from '../../features/ProjectContent/ProjectContent';

const ProjectViewPage = () => {

  return (
    <div className={styles.pages}>
      <MainHeader />
      <MainHero 
        heading="Projects Overview" 
        message="Draft a quick project or search through your database here"
      />
      <Content />
      <MainFooter />
    </div>
  )
};

export default ProjectViewPage;