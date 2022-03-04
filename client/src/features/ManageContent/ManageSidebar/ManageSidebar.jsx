import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import { useSelector } from 'react-redux';

import styles from './ManageSidebar.module.css';
import { GET_PRODUCTSTORE } from '../../../helpers/Queries';

import ProductCard from './ProductCard/ProductCard';

// mocks external product details fetched from Shopify GraphQL API
const productDetail = {
  title: "Dream Sofa",
  alt: "Dream Sofa Image",
  option: "74 inch",
  color: "green"
}

const Sidebar = props => {
  // ==== Handles Initial Product Fetch and Rendering
  const [ filter, setFilter ] = useState(GET_PRODUCTSTORE);
  const { loading, error, data } = useQuery(filter);

  console.log( '===========' );
  // console.log( data.products );

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <h3 className={styles['sidebar-title']}>Product Selection</h3>
        <div className={styles.categories}>
          <button className={styles.button} onClick={()=> setFilter('GET_COUCHES')}>Couches</button>
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

      { (loading) ? <h3> Loading... </h3>
          : (error) ? <h3> `Error! ${error.message}` </h3>   
          : (data.products.length > 0) ? <ProductCard className={styles['carousel-card']} details={productDetail}/> 
          : <h3>No Project Data Stored</h3> }
        
      </div>
    </div>
  )
}


export default Sidebar;