/**
 * ********************************************************
 *
 * @module  App
 * @author  astaiglesia
 * @date    2022
 * @description Top Level React Component... Now w. Redux!
 * Parent of all Parents. Yo Momma.
 *
 * ********************************************************
 */

import React from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import MainHero from './components/MainHero/MainHero';
import MainFooter from './components/MainFooter/MainFooter';
import Content from './components/Content/Content'
import Login from './features/Login/Login';


const App = () => {
  
  return (
    <Login />
  )
}

export default App;

// import BrowserRouter, Routes, Route, Link for React Router

    // <React.Fragment>
    //   <MainHeader />
    //   <MainHero />
    //   <Content />
    //   <MainFooter />
    // </React.Fragment>