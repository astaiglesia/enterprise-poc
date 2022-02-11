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

// function component syntax
const App = () => {
  
  return (
    <div>
      <MainHeader />
      <MainHero />
      <Content />
      <MainFooter />
    </div>
  )
}

export default App;

// import store, Provider for Redux
// import BrowserRouter, Routes, Route, Link for React Router

// Using a class component for use with lifecycle methods
// class App extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Our Boilerplate React App</h1>
//         <p>Complete with Webpack 5 + Babel</p>
//       </div>
//     )
//   };
// };