import React from 'react';

import styles from './ManageContent.module.css';

import Sidebar from './Sidebar/Sidebar';
import ProductCard from './ProductCard/ProductCard';

// mocks product details fetched from Shopify GraphQL API
const productDetail = {
  title: "Dream Sofa",
  alt: "Dream Sofa Image",
  option: "74 inch",
  color: "green"
}


const ManageContent = () => {

  return (
    <div className={styles['content-container']}>
      <Sidebar className={styles.sidebar} >
        <ProductCard details={productDetail}/>
      </Sidebar>
      <div className={styles.gallery}>Gallery Grid</div>
    </div>
  )
}

export default ManageContent;