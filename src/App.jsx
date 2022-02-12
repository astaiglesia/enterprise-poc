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

import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import MainHero from './components/MainHero/MainHero';
import MainFooter from './components/MainFooter/MainFooter';
import Content from './components/Content/Content'
import Wrapper from './helpers/Wrapper';

// function component syntax
const App = () => {
  
  return (
    <Wrapper>
      <MainHeader />
      <MainHero />
      <Content />
      <MainFooter />
    </Wrapper>
  )
}

export default App;

// import BrowserRouter, Routes, Route, Link for React Router
