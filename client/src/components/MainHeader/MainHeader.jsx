import React, { useState } from "react";

import styles from  "./MainHeader.module.css";
// import zzSmallLogo from "../../assets/images/mstile-150x150.png";

import NavMenu from '../MainNav/MainNav';

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