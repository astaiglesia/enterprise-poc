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
import MainFooter from '../../components/MainFooter/MainFooter';
import DashboardContent from '../../features/DashboardContent/DashboardContent';
 
const DashboardPage = () => {

  return (
    <div className={styles.pages}>
      <MainHeader />
      <DashboardContent />
      <MainFooter />
    </div>
  )
};

export default DashboardPage;