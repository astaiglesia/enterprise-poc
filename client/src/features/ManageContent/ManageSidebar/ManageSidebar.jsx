import React from 'react';

import styles from './ManageSidebar.module.css';
import ProductCard from './ProductCard/ProductCard';

// mocks external product details fetched from Shopify GraphQL API
const productDetail = {
  title: "Dream Sofa",
  alt: "Dream Sofa Image",
  option: "74 inch",
  color: "green"
}

const Sidebar = props => {

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <h3 className={styles['sidebar-title']}>Product Selection</h3>
        <div className={styles.categories}>
          <button className={styles.button}>Couches</button>
          <button className={styles.button}>Chairs</button>
          <button className={styles.button}>Tables</button>
          <button className={styles.button}>Desks</button>
          <button className={styles.button}>Lighting</button>
          <button className={styles.button}>Wovens</button>
        
          <button className={styles.button}>Term</button>
        </div>
        <div className={styles['product-search']}>#add search bar#</div>
      </div>

      <div className={styles['selection-carousel']}>
        <ProductCard className={styles['carousel-card']} details={productDetail}/>
      </div>
    </div>
  )
}


export default Sidebar;