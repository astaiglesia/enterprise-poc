import React from "react";

import styles from  "./MainHeader.module.css";

import NavMenu from '../NavMenu/NavMenu';

const MainHeader = () => {

  return (
    <header className={styles['main-header']}>
      <div>
        enterprise concept
      </div>
      
    <NavMenu /> 
    </header>
  )
}

export default MainHeader;