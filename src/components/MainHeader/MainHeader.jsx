import React from "react";

import styles from  './MainHeader.module.css';

const MainHeader = () => {

  return (
    <header className={styles['main-header']}>
      <div className={styles.logo}>sunset-sessions</div>
      <nav>
        codesplit to a nav component and add your nav items, <a href="https://a11y-style-guide.com/style-guide/section-navigation.html">remember to make it accessible!</a>
      </nav>
    </header>
  )
}

export default MainHeader;