import React from 'react';

import styles from './ProductCard.module.css';
import testImage from "../../../assets/images/green-paint-texture.jpg";

const ProductCard = props =>  {
  // provide onDoubleClick and DnD functionality
  

  return (
    <div className={styles['pdp-card']} onClick>
      <h3 className={styles['pdp-title']}>{props.details.title}</h3>
      <img className={styles.image} 
          src={testImage}
          width="250"
          height="250"
          alt={props.details.alt}>
      </img>
      <section className={styles['grid-config']}>
        <div className={styles.gridbox}>{props.details.option}</div>
        <div className={styles.gridbox}>{props.details.color}</div>
        <div className={styles.gridbox}>Sku</div>
        <div className={styles.gridbox}>Supply Chain</div>
      </section>
    </div>
  )
};

export default ProductCard;