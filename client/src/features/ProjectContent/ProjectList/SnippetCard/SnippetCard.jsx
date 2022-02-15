import React from 'react';

import styles from './SnippetCard.module.css';

const SnippetCard = props => {

  const snippet = props.snippetData;

  const chooseSnippetHandler = () => {
    console.log(snippet.id);

    // ### add functionality to open edit order view
  };
  
  return (
    <div className={styles['snippet-card']} onClick={chooseSnippetHandler}>
      <div className={styles['card-field']}> {snippet.orderState} </div>
      <div className={styles['card-field']}> {snippet.nickname} </div>
      <div className={styles['card-field']}> {snippet.location} </div>
      <div className={styles['card-field']}> {snippet.client} </div>
      <div className={styles['card-field']}> {snippet.company} </div>
      {/* ### fix date formatting */}
      <div className={styles['card-field']}> {snippet.deliveryDate} </div>  
      <div className={styles['card-field']}> {snippet.rentalTerm} </div>
      <div className={styles['card-field']}> {snippet.tag} </div>
    </div>
  )
};

export default SnippetCard;