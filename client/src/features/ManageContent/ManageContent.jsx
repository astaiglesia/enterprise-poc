import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './ManageContent.module.css';

import Sidebar from './ManageSidebar/ManageSidebar';

const ManageContent = () => {
  const location = useLocation();
  console.log(location.state.data);

  return (
    <div className={styles['content-container']}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.gallery}>Gallery Grid for order </div>
    </div>
  )
}

export default ManageContent;