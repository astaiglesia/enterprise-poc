import React from "react";

import styles from './MainFooter.module.css';

const MainFooter = () => {

  return (
    <footer className={styles['main-footer']}>
      <p><i>design&development: </i> <em>sunset-sessions</em></p>
    </footer>
  )
};

export default MainFooter;