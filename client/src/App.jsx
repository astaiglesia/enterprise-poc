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
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Login from './routes/LoginPage/LoginPage';
import Dashboard from './routes/DashboardPage/Dashboard';
import Projects from './routes/ProjectsViewPage/ProjectsViewPage';
import ManageProject from './routes/ManageProjectPage/ManageProjectPage';
import Error404 from './routes/Error404Page/Error404Page';

// we can add proxy prior to deployment
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  
  return (  
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/manage" element={<ManageProject />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </ApolloProvider>
  )
};

export default App;