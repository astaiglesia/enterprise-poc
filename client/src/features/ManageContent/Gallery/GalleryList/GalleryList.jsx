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