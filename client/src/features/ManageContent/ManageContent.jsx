import React from 'react';

import styles from './ManageContent.module.css';

import Sidebar from './ManageSidebar/ManageSidebar';


const ManageContent = () => {

  return (
    <div className={styles['content-container']}>
      <Sidebar className={styles.sidebar} >

      </Sidebar>
      <div className={styles.gallery}>Gallery Grid</div>
    </div>
  )
}

export default ManageContent;