/* ##
- fetch list from database
- add search/filter 
- sort by heading (on heading click)
- add scroll / pagination
*/ 

import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ProjectList.module.css';

import OrderCard from '../OrderCard/OrderCard';


const CardList = () => {

  const mockProfiles = useSelector(state => state.projectList)

  const orderList = mockProfiles.map( order => (
    <OrderCard key={order.id} orderData={order}/>
  ));

  return (
    <div className={styles.cardlist}>
      {orderList}
    </div>
  )
};


export default CardList;