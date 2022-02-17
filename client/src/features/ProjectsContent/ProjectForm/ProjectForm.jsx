import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gql, useMutation } from '@apollo/client';

import { createProject } from '../ProjectList/ProjectList/projectListSlice';

import styles from './ProjectForm.module.css';

// define graphql post mutation
const ADD_PROJECT = gql`
  mutation AddProject($input: ProjectType!) {
    addProject(input: $input){
      id
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

const ProjectForm = () => {
  // Use Hooks to Handle Local State for Form Data
  const [formData, setFormData] = useState({
    orderState: 'Draft',
    nickname: '',
    location: '',
    client: '',
    company: '',
    deliveryDate: '',
    rentalTerm: '',
    tag: '',
  });

  const stateHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        orderState: e.target.value,
      }
    })
  };
  
  const nicknameHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        nickname: e.target.value,
      }
    })
  };

  const locationHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        location: e.target.value,
      }
    })
  };

  const clientHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        client: e.target.value,
      }
    })
  };

  const companyHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        company: e.target.value,
      }
    })
  };

  const deliveryDateHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        deliveryDate: e.target.value,
      }
    })
  };

  const termHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        rentalTerm: e.target.value,
      }
    })
  };

  const tagHandler = (e) => {
    setFormData(currentState => {
      return {
        ...currentState,
        tag: e.target.value,
      }
    })
  };


  // let input;
  
  // ---- Handle Form Submission 
  // Apollo API Client -> ### not connected to redux-thunk
  const [addProject, { data, loading, error }] = useMutation(ADD_PROJECT);
  // console.log(data);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  // ### implent a thunk async reducer to Post to DB
  // Dispatches Form State to Redux Store
  // const dispatch = useDispatch();
  const formSubmissionHandler = e => {
    // console.log(formData)
    // const newProject = {
      //   ...formData,
      //   date: new Date(formData.date).toLocaleString()
      // };
      
    e.preventDefault();
    addProject({
      variables: {
        orderState: formData.orderState,
        nickname: formData.nickname,
        location: formData.location,
        client: formData.client,
      }
    })

    // dispatch(createProject(newProject));
  }
  

  return (
    <form className={styles.form} onSubmit={e => {
      e.preventDefault();
      addProject({
        variables: {
          orderState: formData.orderState,
          nickname: formData.nickname,
          location: formData.location,
          client: formData.client,
        }
      })
    }}>
      <h2>Project Profile</h2>
      
      <label htmlFor="orderState" >Order State</label>
      <select type="text" 
              name="orderState"   
              id="orderState" 
              value={formData.orderState}
              onChange={stateHandler} >
        <option value="Draft" defaultValue>Draft</option>
        <option value="Reserved">Reserved</option>
        <option value="onDeposit">onDeposit</option>
        <option value="Approved">Approved</option>
        <option value="Subscribed">Subscribed</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Closed">Closed</option>
        <option value="Flagged">Flagged</option>
      </select>

      <label htmlFor="nickname" >Project Nickname* </label>
      <input type="text" 
              name="nickname" 
              id="nickname" 
              value={formData.nickname}
              required={true} 
              onChange={nicknameHandler} >
      </input>
      
      {/* refactor to pre-populate based on zip - JS30 */}
      <label htmlFor="location" >Location / City* </label>
      <input type="text" 
              name="location" 
              id="location" 
              value={formData.location}
              required={true} 
              onChange={locationHandler} >
      </input>
      
      <label htmlFor="client" >Client</label>
      <input type="text" 
              name="client" 
              id="client" 
              required={true} 
              value={formData.client}
              onChange={clientHandler} >
      </input>

      <label htmlFor="company" >Company</label>
      <input type="text" 
              name="company" 
              id="company" 
              value={formData.company}
              onChange={companyHandler} >
      </input>

      <label htmlFor="deliveryDate" >Delivery Date</label>
      <input type="date" 
              name="deliveryDate" 
              id="deliveryDate" 
              value={formData.deliveryDate}
              onChange={deliveryDateHandler}>
      </input>

      <label htmlFor="rentalTerm" >Rental Term</label>
      <select type="text" 
              name="rentalTerm"   
              id="rentalTerm" 
              value={formData.rentalTerm}
              onChange={termHandler} >
        <option value="1">1 Month</option>
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
        <option value="12" defaultValue>12 Months</option>
      </select>

      <label htmlFor="tag" >Tag</label>
      <input type="text" 
              name="tag" 
              id="tag" 
              value={formData.tag}
              onChange={tagHandler}>
      </input>

      <button type="submit" aria-label="Submit form" >Create Draft Project</button>
    </form>
  )
};

export default ProjectForm;









