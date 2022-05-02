import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './SnippetCard.module.css';

import { manageProject } from '../../../ManageContent/manageContentSlice';

const SnippetCard = ({ snippetData }) => {
  const [ projectSelected, setProjectSelected ] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageOrderHandler = () => {
    dispatch(manageProject(snippetData));
    setProjectSelected(true)
  };
  useEffect(() => {
    console.log('navigate triggered')
    if (projectSelected) navigate('/manage')
  }, [projectSelected, navigate]);
  
  return (
    <div className={styles['snippet-card']}>
      <h3 className={styles.name}> {snippetData.nickname} </h3>
      <h3 className={styles.state}> {snippetData.orderState} </h3>
      <div className={styles.location}> {snippetData.location} </div>
      <div className={styles.client}>Client: {snippetData.client} </div>
      <div className={styles.company}>Company: {snippetData.company} </div>
      {/* ### fix date formatting */}
      <div className={styles.deliverylabel}>Delivery Date :</div>  
      <div className={styles.delivery}> {snippetData.deliveryDate} </div>  
      <div className={styles.termlabel}>Rental Term :</div>
      <div className={styles.term}> {snippetData.rentalTerm} </div>
      <div className={styles.tag}> {snippetData.tag} </div>
      <button className={styles.manage} onClick={manageOrderHandler} >Manage Order</button>
    </div>
  )
};

export default SnippetCard;