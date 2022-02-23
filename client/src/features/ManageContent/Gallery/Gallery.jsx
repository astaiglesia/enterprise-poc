import React from 'react';

import styles from './Gallery.module.css';

const Gallery = () => {

  return (
    <React.Fragment>
      <div>project data in header component</div>
      <div>project details dropdown</div>
      <div>product card gallery</div>
      <div>summary footer</div>
    </React.Fragment>
  )
}

export default Gallery;

// create header with project data
// provide dropdown for project details
// add gallery view to populate with product cards
  // refactor gallery card from product card
  // refactor schemas and models to include order list
  // refactor resolver to evaluate card list and pass to gallery on comonent mount
  // map list to gallery card for rendering
  // add react drag and drop to populate list
// add gallery footer with subtotals and transitions