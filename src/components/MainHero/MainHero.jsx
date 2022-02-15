import React from "react";

import styles from './MainHero.module.css'

const MainHero = props => {
  
  return (
    <div className={styles['main-hero']}>
      <h1>{props.heading}</h1>
      <div>{props.message}</div>
    </div>
  )
}

export default MainHero;