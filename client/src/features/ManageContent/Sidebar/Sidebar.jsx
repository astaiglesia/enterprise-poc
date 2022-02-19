import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = props => {

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <h3 className={styles['sidebar-title']}>Product Selection</h3>
        <button className={styles.button}>Term</button>
        {props.children}
      </div>
    </div>
  )
}


export default Sidebar;