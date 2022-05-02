import React from "react";
import { Link } from "react-router-dom";

import styles from './Recents.module.css';

// fetch saved recent title & projectID from database and dynamically pre-populate quicklinks

const RecentProjects = () => {

  return (
    <section className={styles.recents}>
      <Link className={styles.quicklink} to="/projects/drafts" >Project 1</Link>
      <Link className={styles.quicklink} to="/projects/drafts" >Project 2</Link>
      <Link className={styles.quicklink} to="/projects/drafts" >Project 3</Link>
      <Link className={styles.quicklink} to="/projects/drafts" >Project 4</Link>
    </section>
  )
}

export default RecentProjects;