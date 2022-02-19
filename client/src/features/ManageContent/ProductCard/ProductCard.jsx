import React from 'react';
import useToggle from '../../../helpers/customHooks/useToggle';

import styles from './ProductCard.module.css';
import testImage from "../../../assets/images/green-paint-texture.jpg";

import Overlay from '../../../routes/LoginPage/LoginModal/Overlay/Overlay'

const ProductCard = props =>  {
  // useState for expanded state
  const [isExpanded, toggleExpanded] = useToggle()

  // provide onDoubleClick and DnD functionality
  const handleClick = (e) => {
    switch (e.detail) {
      case 2:
        // double click should add expaond onto an overlay modal
        toggleExpanded()
        console.log("double click");
        break;
      case 3:
        // triple click should add add to product list
        console.log("triple click");
        break;
      default:
        return;
    }
  };  

  return (
    <div className={isExpanded ? styles['expanded-pdp'] : styles['pdp-card']} onClick={handleClick}>
      <h3 className={styles['pdp-title']}>{props.details.title}</h3>
      <img className={styles.image} 
          src={testImage}
          width={isExpanded ? "350" : "250"}
          height={isExpanded ? "500" : "250"}
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