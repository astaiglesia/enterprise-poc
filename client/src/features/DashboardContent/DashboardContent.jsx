import React from 'react';

import styles from './DashboardContent.module.css'

import OneByOne from '../../components/DashboardCards/OneByOne/OneByOne';
import ProjectSummaries from './ProjectSummaries/ProjectSummaries';
import RecentProjects from './Recents/Recents';
import Calendar from './Schedule/Calendar';
import Eventboard from './Schedule/Eventboard';

const DashboardContent = () => {

  return (
    <div className={styles['grid-container']}>
      <OneByOne />
      <RecentProjects />
      <ProjectSummaries />
      <Calendar />
      <Eventboard />
      {/* <div>Add Events / Calendar</div>
      <div>Add Quick Links to recent projects</div>
      <div>Add Notes</div>
      <div>Implement Grid</div> */}
    </div>
  )
}

export default DashboardContent;