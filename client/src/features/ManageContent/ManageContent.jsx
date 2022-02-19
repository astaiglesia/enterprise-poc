import React from 'react';

<<<<<<< HEAD
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

=======
import styles from './ManageContent.module.css'

import Sidebar from './Sidebar/Sidebar';
>>>>>>> d63af654fcd24bb8212eb2f27778d54fda3b5786

const ManageContent = () => {

  return (
    <div className={styles['content-container']}>
<<<<<<< HEAD
      <Sidebar className={styles.sidebar} >
        <ProductCard details={productDetail}/>
      </Sidebar>
=======
        <Sidebar />
>>>>>>> d63af654fcd24bb8212eb2f27778d54fda3b5786
      <div className={styles.gallery}>Gallery Grid</div>
    </div>
  )
}

export default ManageContent;