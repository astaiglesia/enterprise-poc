import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ProjectList.module.css';
// import mockOrderProfiles from '../../../assets/mockOrderData';

import OrderCard from '../OrderCard/OrderCard';


const CardList = () => {
  // const mockProfiles = Object.entries(mockOrderProfiles);
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