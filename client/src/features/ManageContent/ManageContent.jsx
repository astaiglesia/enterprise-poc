import React from 'react';

import styles from './ManageContent.module.css';


import ProductCard from './ProductCard/ProductCard';

// mocks product details fetched from Shopify GraphQL API
const productDetail = {
  title: "Dream Sofa",
  alt: "Dream Sofa Image",
  option: "74inch",
  color: "green"
}

const ManageContent = () => {

  return (
    <div className={styles['content-container']}>
      <ProductCard details={productDetail}/>
      
    </div>
  )
}

export default ManageContent;