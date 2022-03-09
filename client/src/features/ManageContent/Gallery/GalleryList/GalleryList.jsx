import React from 'react';
import styles from './GalleryList.module.css';

import GalleryCard from '../GalleryCard/GalleryCard';

const GalleryList =() => {

  // array of product objects
  const mockdata = [
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    },
    {
      title: "Chair"
    }
  ];

  // const ProductDeck = mockdata.map(project => {
  //   return <GalleryCard className={styles.tempCard}> G </GalleryCard>
  // })

  return (
    <section className={styles['list-container']}>
      { 
        mockdata.map( project => {
        return <GalleryCard details={project} /> 
        })
      }
    </section>
  )
}

export default GalleryList;