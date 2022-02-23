import React from 'react';

import styles from './Summary.module.css';

const calculatedTotal = 125.05; // temp hardcoded data - replace with logic to reduce order array

const Summary = () => {

  return (
    <section className={styles.summary}>
      <div className={styles.subtotal}><span>Monthly Rental Subtotal : </span>{calculatedTotal}</div>
    </section>
  )
};

export default Summary;