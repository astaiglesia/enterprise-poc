import React from "react";

import styles from './MainHero.module.css'

const MainHero = () => {
  
  return (
    <div className={styles['main-hero']}>
      <h1>React + Redux Sample App</h1>
      <div>Complete with Webpack 5 + Babel + CSS Modules</div>
    </div>
  )
}

export default MainHero;