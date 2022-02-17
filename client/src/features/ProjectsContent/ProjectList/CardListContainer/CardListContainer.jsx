import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import styles from './CardListContainer.module.css';

import ProjectList from '../ProjectList/ProjectList';
import { GET_SNIPPETS, GET_DRAFTS, GET_RESERVEDS, GET_DEPOSITS, GET_APPROVEDS, GET_SUBSCRIBEDS } from '../../../../helpers/Queries';

const CardListContainer = props => {
  const [ filter, setFilter ] = useState(GET_SNIPPETS);
  const [ isFilterOn, setIsFilterOn ] = useState(false);

  useEffect(() => {
    if (filter === GET_SNIPPETS) setIsFilterOn(false)
    else setIsFilterOn(true);
  }, [filter])

  const { loading, error, data } = useQuery(filter);
  
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
          <button type="button" onClick={() => setFilter(GET_DRAFTS)} className={styles['quick-sort']}> drafts </button>
          <button type="button" onClick={() => setFilter(GET_RESERVEDS)} className={styles['quick-sort']}> reserved </button>
          <button type="button" onClick={() => setFilter(GET_DEPOSITS)} className={styles['quick-sort']}> onDeposit </button>
          <button type="button" onClick={() => setFilter(GET_APPROVEDS)} className={styles['quick-sort']}> approved </button>
          <button type="button" onClick={() => setFilter(GET_SUBSCRIBEDS)} className={styles['quick-sort']}> subscribed </button>
          <button type="button" onClick={() => setFilter(GET_SNIPPETS)} className={styles['quick-sort']}> all orders </button>
        </div>
 
      </div>

      <div >
        { (loading) ? <h3> Loading... </h3>
          : (error) ? <h3> `Error! ${error.message}` </h3>   
          : <ProjectList isFilterOn={isFilterOn} data={data} />}
      </div>
    </section>

  )
};

export default CardListContainer;