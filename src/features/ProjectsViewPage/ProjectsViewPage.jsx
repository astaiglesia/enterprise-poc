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

import MainHeader from '../../components/MainHeader/MainHeader';
import MainHero from '../../components/MainHero/MainHero';
import MainFooter from '../../components/MainFooter/MainFooter';
import Content from '../../components/Content/Content';

const ProjectViewPage = () => {

  return (
    <React.Fragment>
      <MainHeader />
      <MainHero />
      <Content />
      <MainFooter />
    </React.Fragment>
  )
};

export default ProjectViewPage;