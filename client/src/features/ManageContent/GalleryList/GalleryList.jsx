import React from 'react';
import styles from './GalleryList.module.css';

const GalleryList =() => {

  return (
    <section className={styles[
      'list-container']}>
       <div className={styles.tempCard}> Gallery Card </div>
    </section>
  )
}

export default GalleryList;