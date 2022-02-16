import React, { useState, useEffect } from 'react';
import styles from './CardListContainer.module.css';

import ProjectList from '../ProjectList/ProjectList';
import { GET_SNIPPETS, GET_DRAFTS, GET_RESERVED } from '../../../../helpers/Queries'

const CardListContainer = props => {
  const [ filter, setFilter ] = useState(GET_SNIPPETS);
  // const [ isFilterOn, setIsFilterOn ] = useState(false);

  const draftFilterHandler = () => {
    // setIsFilterOn(true);
    setFilter(GET_DRAFTS);
  }

  return (

    <section className={styles['list-container']}>
      <div className={styles['list-header']}> 
        <button type="button" onClick={props.toggleSidebar} className={styles['create-button']}> + </button>

        <div className={styles.search}>
          <label htmlFor="orderSearch">project filter</label>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
          <button>></button>
        </div>

        <div className={styles.quicklinks}>
          <button type="button" onClick={draftFilterHandler} className={styles['quick-sort']}> drafts </button>
          <button type="button" onClick={props.toggleSidebar} className={styles['quick-sort']}> reserved </button>
          <button type="button" onClick={props.toggleSidebar} className={styles['quick-sort']}> onDeposit </button>
          <button type="button" onClick={props.toggleSidebar} className={styles['quick-sort']}> approved </button>
          <button type="button" onClick={props.toggleSidebar} className={styles['quick-sort']}> subscribed </button>
          <button type="button" onClick={props.toggleSidebar} className={styles['quick-sort']}> all orders </button>
        </div>
 
      </div>

      <div >
        <ProjectList filter={filter} />
      </div>
    </section>

  )
};

export default CardListContainer;