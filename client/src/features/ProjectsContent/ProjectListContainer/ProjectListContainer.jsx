import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';

import styles from './ProjectListContainer.module.css';
import { GET_SNIPPETS, GET_DRAFTS, GET_RESERVEDS, GET_DEPOSITS, GET_APPROVEDS, GET_SUBSCRIBEDS } from '../../../helpers/Queries';

import ProjectList from './ProjectList/ProjectList';


const CardListContainer = props => {
  // --- Handles Initial Rendering of Project List
  const [ filter, setFilter ] = useState(GET_SNIPPETS);
  const { loading, error, data } = useQuery(filter);
  // console.log(data)
  // --- Handles Mutation Logic to Add New Projects
  
  // defines mutation query 
  // const NEW_PROJECT = gql`
  // mutation CreateProject ($newProject:NewProjectInput!){
  //   addProject (input: $newProject) {
  //     id
  //     orderState
  //     nickname
  //     location
  //     client
  //     company
  //     deliveryDate
  //     rentalTerm
  //     tag
  //   }
  // }
  // `;
  
  // const [ createProject, newProject ] = useMutation(NEW_PROJECT); 
  
  // retrieves new project form data from Redux store
  // const newProjectData = useSelector(state => {
  //   console.log(state.projectForm.newProjectData)
  //   return state.projectForm.newProjectData;
  // });

  // useEffect(() => {
  //   createProject({
  //     variables: {newProject: {...newProjectData}}
  //   })
  // }, [createProject, newProjectData])
  
  // // triggers a re-render of Project List onFulfillment of useMutation
  // useEffect(() => {
  //   console.log('setFilter Triggered')
  //   setFilter(GET_SNIPPETS)
  //   console.log(newProject.error)
  // }, [newProject.error])
    

  // ## codesplit header and filter logic
  return (
    <section className={styles['list-container']}>
      <div className={styles['list-header']}> 
        <button type="button" onClick={props.toggleSidebar} className={styles['create-button']}> + </button>

        <div className={styles.search}>
          <label htmlFor="orderSearch">project filter</label>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
          <button>Search</button>
        </div>

        <div className={styles.quicklinks}>
          <button type="button" onClick={() => setFilter(GET_DRAFTS)} className={styles['quick-sort']}> drafts </button>
          <button type="button" onClick={() => setFilter(GET_RESERVEDS)} className={styles['quick-sort']}> reserved </button>
          <button type="button" onClick={() => setFilter(GET_DEPOSITS)} className={styles['quick-sort']}> onDeposit </button>
          <button type="button" onClick={() => setFilter(GET_APPROVEDS)} className={styles['quick-sort']}> approved </button>
          <button type="button" onClick={() => setFilter(GET_SUBSCRIBEDS)} className={styles['quick-sort']}> subscribed </button>
          <button type="button" onClick={() => setFilter(GET_SNIPPETS)} className={styles['quick-sort']}> all orders </button>
        </div>
      </div>

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