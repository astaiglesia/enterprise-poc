import React from 'react';

import styles from './GalleryHeader.module.css';

const GalleryHeader = () => {

  return (
    <section className={styles['gallery-header']}>
      <h3 className={styles['gallery-heading']}>Product Mix</h3>
    </section>
  )
};

export default GalleryHeader;