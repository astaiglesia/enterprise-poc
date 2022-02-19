import React from 'react';

import styles from './DashboardContent.module.css'
import ProjectSummaries from './ProjectSummaries/ProjectSummaries';

const DashboardContent = () => {

  return (
    <div className={styles['content-container']}>
      <ProjectSummaries />
      <div>Add Events / Calendar</div>
      <div>Add Quick Links to recent projects</div>
      <div>Add Notes</div>
      <div>Implement Grid</div>
    </div>
  )
}

export default DashboardContent;