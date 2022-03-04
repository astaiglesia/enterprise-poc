import React from "react";

import styles from './Eventboard.module.css';

// essentially a todo app -> stretch to sync with google calendar
const PostIt = () => {

  return (
    <section className={styles['post-it']}>
      Temp Message to be stuck on board
    </section>
  )
}

const Eventboard = () => {

  return (
    <section className={styles.eventboard} >
      <PostIt />
      <PostIt />
      <PostIt />
      <PostIt />
    </section>
  )
}

export default Eventboard;