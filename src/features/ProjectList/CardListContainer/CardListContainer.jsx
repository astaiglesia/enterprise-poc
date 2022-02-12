import React from 'react';
import styles from './CardListContainer.module.css';

import ProjectList from '../ProjectList/ProjectList';

const CardListContainer = () => {
  
  return (

    <section className={styles['list-container']}>
      <div className={styles['list-headings']}> 
        <h3>State</h3>
        <h3>Nickname</h3>
        <h3>Location</h3>
        <h3>Client</h3>
        {/* <h3>Company</h3>
        <h3>Delivery</h3>
        <h3>Term</h3>
        <h3>Tag</h3> */}
      </div>

      <div >
        <ProjectList />
      </div>
    </section>

  )
};

export default CardListContainer;