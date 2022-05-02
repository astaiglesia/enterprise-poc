/**
* ********************************************************
*
* @module  App
* @author  astaiglesia
* @date    2022
* @description Error 404 page -> Handles 404's
*
* ********************************************************
*/

import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './Error404Page.module.css'

import MainFooter from '../../components/MainFooter/MainFooter';

const Error404Page = () => {
 
  return (
    <React.Fragment>
    <h1>This is not the page you were looking for...</h1>
    <div>
      <Link to="/">take me away</Link> ...a million miles away from here
    </div>
    <MainFooter />
    </React.Fragment>
  )
};

export default Error404Page;