import React, { useState } from 'react';
import { useSelector } from "react-redux";

import styles from './ProjectHero.module.css';


const ProjectHero = () => {
  const selectedProject = useSelector(state => state.manageContent.project1);
  const [ project1Data, setProject1] = useState(selectedProject);
  console.log(project1Data);
  
  const { _id, nickname, orderState, location, client, company, deliveryDate, rentalTerm, tag } = project1Data;
  
  return (
    <section className={styles.hero}>
      <div className={styles['project-title']}>
        <div>{nickname} -</div>
        <div>{location}</div>
      </div> 
      
      <div className={styles['client-info']}>
        <div>{company} -</div>
        <div>{client}</div>
      </div>    
      
      <div className={styles.state}>
        <div>{orderState}</div>
      </div>
      
      <div className={styles.manage}>
        <button className={styles['details-button']}>Project Details</button>
      </div>

    </section>
  )
}

export default ProjectHero;