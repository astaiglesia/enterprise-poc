import React from 'react';
import { useSelector } from "react-redux";

import styles from './GalleryHeader.module.css';

const GalleryHeader = () => {
  const selectedProject = useSelector(state => state.manageContent.project1);
 
  const { nickname, orderState, location, client, company } = selectedProject;
  
  return (
    <section className={styles.header}>
      <div className={styles['project-title']}>
        <h2 className={styles['header-heading']}>{nickname}</h2>
        <h3 className={styles['header-heading']}>{location}</h3>
      </div> 
      <div className={styles['client-info']}>
        <div>{company}</div>
        <div>{client}</div>
      </div>    
      <div className={styles.state}>
        <h2>{orderState}</h2>
      </div>
    </section>
  )
};

export default GalleryHeader;