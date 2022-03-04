import React from "react";
import { Link } from "react-router-dom";

// import styles from '../../DashboardContent.module.css';
import styles from './OneByOne.module.css'

const OneByOne = () => {

  return (
    <section className={`${styles['one-by-one']} ${styles['card-wrapper']}`}>
      <Link className={styles.link} to="/projects/drafts" >Some Data</Link>
      <div className={styles.blurb}>description about data</div>
    </section>
  )
}

export default OneByOne;