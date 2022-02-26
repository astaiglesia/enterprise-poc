import React from 'react';

import styles from './Summary.module.css';

const Purchases = 2580.; // temp hardcoded data - replace with logic to reduce order array
const Rentals = 125.05; // temp hardcoded data - replace with logic to reduce order array

const Summary = () => {

  return (
    <section className={styles.summary}>
      <div className={styles.subtotal}><span>Purchase Subtotal : </span>{Purchases}</div>
      <div className={styles.subtotal}><span>Monthly Rental Subtotal : </span>{Rentals}</div>
    </section>
  )
};

export default Summary;