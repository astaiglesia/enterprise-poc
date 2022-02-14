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
 
const DashboardPage = () => {

  return (
    <React.Fragment>
      <MainHeader />
      <div>ZZ Dashboard</div>
      <div>Add Stuff</div>
      <div>Add More Stuff</div>
    </React.Fragment>
  )
};

export default DashboardPage;