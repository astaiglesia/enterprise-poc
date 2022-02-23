import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SnippetCard.module.css';

const SnippetCard = props => {
  const snippet = props.snippetData;
  const navigate = useNavigate();
  const manageOrderHandler = () => {
    navigate('/manage', {state: { data: snippet }})
  };
  
  return (
    <div className={styles['snippet-card']}>
      <h3 className={styles.name}> {snippet.nickname} </h3>
      <h3 className={styles.state}> {snippet.orderState} </h3>
      <div className={styles.location}> {snippet.location} </div>
      <div className={styles.client}>Client: {snippet.client} </div>
      <div className={styles.company}>Company: {snippet.company} </div>
      {/* ### fix date formatting */}
      <div className={styles.deliverylabel}>Delivery Date :</div>  
      <div className={styles.delivery}> {snippet.deliveryDate} </div>  
      <div className={styles.termlabel}>Rental Term :</div>
      <div className={styles.term}> {snippet.rentalTerm} </div>
      <div className={styles.tag}> {snippet.tag} </div>
      <button className={styles.manage} onClick={manageOrderHandler} >Manage Order</button>
    </div>
  )
};

export default SnippetCard;