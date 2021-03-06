import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ProjectForm.module.css';

import { createProject } from './projectFormSlice';

// Define Reducer Actions
const CreateProjectReducer = (currentState, action) => {
  switch (action.type) {
    case 'SELECT_STATE' : {
      return {
        ...currentState,
        orderState: action.payload,
      }
    }
    case 'INPUT_NICKNAME' : {
      return {
        ...currentState,
        nickname: action.payload,
      }
    }
    case 'BLUR_NICKNAME' : {
      // create an alert if less than 4 chars
      return {
        ...currentState,
        nicknameIsValid: currentState.nickname.trim().length > 3,
      }
    }
    case 'INPUT_LOCATION' : {
      return {
        ...currentState,
        location: action.payload,
      }
    }
    case 'BLUR_LOCATION' : {
      // create an alert if less than 4 chars 
      return {
        ...currentState,
        locationIsValid: currentState.location.trim().length > 3,
      }
    }
    case 'INPUT_CLIENT' : {
      return {
        ...currentState,
        client: action.payload,
      }
    }
    case 'BLUR_CLIENT' : {
      // create an alert if less than 4 chars 
      return {
        ...currentState,
        clientIsValid: currentState.client.trim().length > 3,
      }
    }
    case 'INPUT_COMPANY' : {
      return {
        ...currentState,
        company: action.payload,
      }
    }
    case 'INPUT_DELIVERY' : {
      return {
        ...currentState,
        deliveryDate: action.payload,
      }
    }
    case 'SELECT_TERM' : {
      return {
        ...currentState,
        rentalTerm: action.payload,
      }
    }
    case 'INPUT_TAG' : {
      return {
        ...currentState,
        tag: action.payload,
      }
    }
    default: 
    return currentState;
  }
}

// Use Hooks to Handle Local State of Form Data
const ProjectForm = () => {
  // ---- Defines Initial State & 2-Way Bindings to Form Fields
  const initialFormState = {
    orderState: '',                     
    nickname: '',
    nicknameIsValid: null,
    location: '',
    locationIsValid: null,
    client: '',
    clientIsValid: null,
    company: '',
    deliveryDate: '',
    rentalTerm: '',
    tag: '',
  };
  const [formState, dispatchFormData] = useReducer(CreateProjectReducer, initialFormState);
  
  const [formIsValid, setFormIsValid] = useState(false);
  
  useEffect(() => {
    (formState.nicknameIsValid && formState.locationIsValid && formState.clientIsValid) && setFormIsValid(true);
  }, [formState.nicknameIsValid, formState.locationIsValid, formState.clientIsValid]);

  // ---- Handles Form Field Updates, Dispatch To Reducer
  const stateChangeHandler = (e) => {
    dispatchFormData({type:'SELECT_STATE', payload: e.target.value})
  };

  const nicknameHandler = (e) => {
    dispatchFormData({type:'INPUT_NICKNAME', payload: e.target.value})
  };
  const validNicknameHandler = () => {
    dispatchFormData({type:'BLUR_NICKNAME'})
  };

  const locationHandler = (e) => {
    dispatchFormData({type: 'INPUT_LOCATION', payload: e.target.value})
  };
  const validLocationHandler = () => {
    dispatchFormData({type: 'BLUR_LOCATION'})
  };

  const clientHandler = (e) => {
    dispatchFormData({type: 'INPUT_CLIENT', payload: e.target.value})
  };
  const validClientHandler = (e) => {
    dispatchFormData({type: 'BLUR_CLIENT'})
  };

  const companyHandler = (e) => {
    dispatchFormData({type: 'INPUT_COMPANY', payload: e.target.value})
  };

  const deliveryDateHandler = (e) => {
    dispatchFormData({type: 'INPUT_DELIVERY', payload: e.target.value})
  };

  const termHandler = (e) => {
    dispatchFormData({type: 'SELECT_TERM', payload: e.target.value})
  };

  const tagHandler = (e) => {
    dispatchFormData({type: 'INPUT_TAG', payload: e.target.value})
  };

  // ---- Handles Form Submission 
  // ### thunk / apollo / logic to Post to DB
  // apollo approach ---
  // dispatch formState to store
  // projectListContainer > useSelector to grab form state
  // pass into useMutation to send POST mutation
  // useEffect to setFilter to GET_SNIPPETS with a dep of mutation data response
  // --- this will trigger a re-render
  
  // Dispatches Form State to Redux Store
  const dispatch = useDispatch();
  const formSubmissionHandler = e => {
    e.preventDefault();

    const newProject = {
      orderState: formState.orderState,                     
      nickname: formState.nickname,
      location: formState.location,
      client: formState.client,
      company: formState.company,
      deliveryDate: new Date(formState.deliveryDate).toLocaleString(),
      rentalTerm: formState.rentalTerm,
      tag: formState.tag
    }

    dispatch(createProject(newProject));
  };
  
  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <h2>Project Profile</h2>
      
      <label htmlFor="orderState" >Rental Term</label>
      <select type="text" 
              name="orderState"   
              id="orderState" 
              value={formState.orderState}
              onChange={stateChangeHandler} >
        <option value="Draft" defaultValue>Draft</option>
        <option value="Reserved">Reserved</option>
        <option value="onDeposit">onDeposit</option>
        <option value="Approved">Approved</option>
        <option value="Subscribed">Subscribed</option>
        <option value="Closed">Closed</option>
      </select>

      <label htmlFor="nickname" >Project Nickname* </label>
      <input type="text" 
              name="nickname" 
              id="nickname" 
              value={formState.nickname}
              required={true} 
              onChange={nicknameHandler}
              onBlur={validNicknameHandler} >
      </input>
      
      <label htmlFor="location" >Location / City* </label>
      <input type="text" 
              name="location" 
              id="location" 
              value={formState.location}
              required={true} 
              onChange={locationHandler}
              onBlur={validLocationHandler} >
      </input>
      
      <label htmlFor="client" >Client</label>
      <input type="text" 
              name="client" 
              id="client" 
              required={true} 
              value={formState.client}
              onChange={clientHandler} 
              onBlur={validClientHandler} >
      </input>

      <label htmlFor="company" >Company</label>
      <input type="text" 
              name="company" 
              id="company" 
              value={formState.company}
              onChange={companyHandler} >
      </input>

      <label htmlFor="deliveryDate" >Delivery Date</label>
      <input type="date" 
              name="deliveryDate" 
              id="deliveryDate" 
              value={formState.deliveryDate}
              onChange={deliveryDateHandler}>
      </input>

      <label htmlFor="rentalTerm" >Rental Term</label>
      <select type="text" 
              name="rentalTerm"   
              id="rentalTerm" 
              value={formState.rentalTerm}
              onChange={termHandler} >
        <option value="12" defaultValue>12 Months</option>
        <option value="1">1 Month</option>
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
      </select>

      <label htmlFor="tag" >Tag</label>
      <input type="text" 
              name="tag" 
              id="tag" 
              value={formState.tag}
              onChange={tagHandler}>
      </input>

      <button type="submit" aria-label="Submit form" disabled={!formIsValid}>Create Draft Project</button>
    </form>
  )
};

export default ProjectForm;









