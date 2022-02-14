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
import { Routes, Route, Link } from "react-router-dom";

import Login from './features/LoginPage/LoginPage';
import Dashboard from './features/DashboardPage/Dashboard';
import Projects from './features/ProjectsViewPage/ProjectsViewPage';
import ManageProject from './features/EditProjectPage/EditProjectPage';
import Error404 from './features/Error404Page/Error404Page';


const App = () => {
  
  return (  
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/manage" element={<ManageProject />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App;

// import BrowserRouter, Routes, Route, Link for React Router

