import React from "react";
import { Link } from "react-router-dom";

import styles from './ProjectSummaries.module.css';

const ProjectSummaries = () => {

  return (
    <section className={styles.summaries}>
      <Link className={styles.summary} to="/projects/drafts" >Drafts :</Link>
      <Link className={styles.summary} to="/projects/deposit" >Deposit :</Link>
      <Link className={styles.summary} to="/projects/reserved" >Reserved :</Link>
      <Link className={styles.summary} to="/projects/approved" >Approved :</Link>
      <Link className={styles.summary} to="/projects/subscribed" >Subscribed :</Link>
    </section>
  )
}

export default ProjectSummaries;