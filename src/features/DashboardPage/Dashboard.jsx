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
      <div>Add Summaries</div>
      <div>Add Quick Links</div>
      <div>Add Notes</div>
      <div>Add Events / Calendar</div>
    </React.Fragment>
  )
};

export default DashboardPage;