/**
* ********************************************************
*
* @module  App
* @author  astaiglesia
* @date    2022
* @description Dashboard Page Assembly -> Project Summaries,  
*               Overviews, Notes, Calendar, Upcoming Events
*
* ********************************************************
*/

import React from 'react';

import styles from './Dashboard.module.css';

import MainHeader from '../../components/MainHeader/MainHeader';
import MainHero from '../../components/MainHero/MainHero';
import MainFooter from '../../components/MainFooter/MainFooter';
import Content from '../../features/ProjectContent/ProjectContent';
 
const DashboardPage = () => {

  return (
    <div className={styles.pages}>
    <MainHeader />
    <MainHero 
      heading="Your Dashboard" 
      message="Global overview of your enterprise business"
    />
    {/* <Content /> */}
    <div>Add Summaries</div>
    <div>Add Quick Links</div>
    <div>Add Notes</div>
    <div>Add Events / Calendar</div>
    <MainFooter />
  </div>
  )
};

export default DashboardPage;
    <React.Fragment>
      <MainHeader />

    </React.Fragment>