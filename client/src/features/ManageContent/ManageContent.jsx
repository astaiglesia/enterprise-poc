import React from 'react';

import styles from './ManageContent.module.css'

import Sidebar from './Sidebar/Sidebar';

const ManageContent = () => {

  return (
    <div className={styles['content-container']}>
        <Sidebar />
      <div className={styles.gallery}>Gallery Grid</div>
    </div>
  )
}

export default ManageContent;