import React from 'react';

import styles from './ManageContent.module.css';

import Sidebar from './ManageSidebar/ManageSidebar';
import Gallery from './Gallery/Gallery';

const ManageContent = () => {
  // const location = useLocation();
  // console.log(location.state.data);

  return (
    <main className={styles['content-container']}>
      <Sidebar className={styles.sidebar} />
      <Gallery />
    </main>
  )
}

export default ManageContent;