import React from 'react';

import styles from './CardList.module.css';
import mockOrderProfiles from '../../../assets/mockOrderData';

import OrderCard from '../OrderCard/OrderCard';


const CardList = props => {
  const mockProfiles = Object.entries(mockOrderProfiles);

  const orderList = mockProfiles.map( order => (
    <OrderCard key={order[0]} orderData={order[1]}/>
  ));

  return (
    <div className={styles.cardlist}>
      {orderList}
    </div>
  )
};


export default CardList;