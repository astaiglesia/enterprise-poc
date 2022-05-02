import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';

import styles from './ProjectListContainer.module.css';
import { GET_SNIPPETS, GET_DRAFTS, GET_RESERVEDS, GET_DEPOSITS, GET_APPROVEDS, GET_SUBSCRIBEDS } from '../../../helpers/Queries';

import ProjectList from './ProjectList/ProjectList';
import ProjectForm from "../ProjectForm/ProjectForm";


const CardListContainer = props => {
  // ===== Handles Initial Rendering of Project List
  const [ filter, setFilter ] = useState(GET_SNIPPETS);
  const { loading, error, data } = useQuery(filter);

  // ===== Handles Mutation Logic to Add New Projects  
  // defines mutation query 
  const ADD_PROJECT = gql`
  mutation AddProject ($newProject:NewProjectInput!){
    addProject (input: $newProject) {
      _id
      orderState
      nickname
      location
      client
      company
      deliveryDate
      rentalTerm
      tag
    }
  }
  `;
  
  // ## =+=+=+ reasess state management of project forms and queries -> see BUGS
  const [ addProject, {loading: newLoad, error: newError, data: newData} ] = useMutation(ADD_PROJECT); 
  
  // retrieves new project form data from Redux store
  const newProjectData = useSelector(state => state.projectForm.newProjectData);

  useEffect(() => {
    addProject({
      variables: {newProject: {...newProjectData}}
    });
    
  }, [addProject, newProjectData]);
  
  
  // ## =+=+=+= BUGS =+=+
  // list needs to be updated
  // form needs to be reset
  // date is not passing through (formatting?)
  // useEffect(() => {
    
  //   console.log(newData)
  // }, [newData])
  
  // // triggers a re-render of Project List onFulfillment of useMutation
  // useEffect(() => {
  //   console.log('setFilter Triggered')
  //   console.log(newProject.error)
  // }, [newProject.error])
   
  const [isDetailsbarOpen, setIsDetailsbarOpen ] = useState(false);

  const toggleSidebar = () => {
    setIsDetailsbarOpen(!isDetailsbarOpen)
  }

  // ## modularize header, map buttons and filter logic
  return (
    <section className={styles['list-container']}>
      <div className={styles['list-header']}> 
        <div className={styles.quicklinks}>
          <button type="button" onClick={toggleSidebar} className={styles['quick-sort']}> create new project </button>
          <button type="button" onClick={() => setFilter(GET_DRAFTS)} className={styles['quick-sort']}> drafts </button>
          <button type="button" onClick={() => setFilter(GET_RESERVEDS)} className={styles['quick-sort']}> reserved </button>
          <button type="button" onClick={() => setFilter(GET_DEPOSITS)} className={styles['quick-sort']}> onDeposit </button>
          <button type="button" onClick={() => setFilter(GET_APPROVEDS)} className={styles['quick-sort']}> approved </button>
          <button type="button" onClick={() => setFilter(GET_SUBSCRIBEDS)} className={styles['quick-sort']}> subscribed </button>
          <button type="button" onClick={() => setFilter(GET_SNIPPETS)} className={styles['quick-sort']}> all orders </button>
        </div>
      
        <div className={styles.search}>
          <label htmlFor="site-search">filter</label>
            <input type="search" id="site-search" className={styles['site-search']} name="site-search" aria-label="Search through site content"/>
          <button type="submit" className={styles['quick-sort']}>Search</button>
        </div>
      </div>

      {(isDetailsbarOpen) && <ProjectForm />}

      {/* pull logic out of the return statement andrefactor to switch statement? */}
      <React.Fragment>
        { (loading) ? <h3> Loading... </h3>
          : (error) ? <h3> `Error! ${error.message}` </h3>   
          : (data.projects.length > 0) ? <ProjectList data={data} /> 
          : <h3>No Project Data Stored</h3> }
      </React.Fragment>
    </section>
  )
};

export default CardListContainer;