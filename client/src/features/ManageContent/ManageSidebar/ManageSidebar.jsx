import React from 'react';

import styles from './ManageSidebar.module.css';
import ProductCard from '../ProductCard/ProductCard';

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
        <button className={styles.button}>Term</button>
        <div className={styles.categories}>Category Filters</div>
        <div className={styles['product-search']}>#add search bar#</div>
      </div>

      <div className={styles['selection-carousel']}>
        <ProductCard className={styles['carousel-card']} details={productDetail}/>
      </div>
    </div>
  )
}


export default Sidebar;