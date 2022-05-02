import React from 'react';
import useToggle from '../../../../helpers/customHooks/useToggle';

import styles from './ProductCard.module.css';
import testImage from '../../../../assets/images/green-paint-texture.jpg';

const ProductCard = ({ product })=>  {
  const [isExpanded, toggleExpanded] = useToggle()

  // ## provide onDoubleClick and DnD functionality
  const handleClick = (e) => {
    switch (e.detail) {
      case 2:
        // ## double click to expanded product configuration overlay 
        toggleExpanded()
        console.log("double click");
        break;
      case 3:
        // ## triple click should add product to product list
        console.log("triple click");
        break;
      default:
        return;
    }
  };  

  return (
    <div className={isExpanded ? styles['expanded-pdp'] : styles['pdp-card']} onClick={handleClick}>
      <h3 className={styles['pdp-title']}>{product.title}</h3>
      <img className={styles.image} 
          src={testImage}
          width={isExpanded ? "350" : "250"}
          height={isExpanded ? "500" : "250"}
          alt={product.alt}>
      </img>
      <section className={styles['grid-config']}>
        <div className={styles.gridbox}>{product.option}</div>
        <div className={styles.gridbox}>{product.color}</div>
        <div className={styles.gridbox}>${product.price}</div>
        <div className={styles.gridbox}>{product.category}</div>
      </section>
    </div>
  )
};

export default ProductCard;