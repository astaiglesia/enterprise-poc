import React from 'react';
import useToggle from '../../helpers/customHooks/useToggle';

import styles from './ManageContent.module.css';

import Sidebar from './ManageSidebar/ManageSidebar';
import Gallery from './Gallery/Gallery';

const ManageContent = () => {
  const [isToggled, setIsToggled] = useToggle(false);
  
  return (
    <main className={styles['content-container']}>
      {isToggled && <Sidebar className={styles.sidebar} />}
      <button 
        className={styles.burger}
        onClick={(prevState) => setIsToggled(!prevState)}
      > 
        {isToggled ? <h1> - </h1> : <h1> + </h1>} 
      </button>
      <Gallery />
    </main>
  )
}

export default ManageContent;