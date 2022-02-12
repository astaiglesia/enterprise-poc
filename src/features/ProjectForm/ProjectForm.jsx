import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  changeNickname, 
  changeLocation, 
  changeClient, 
  selectNickname,
} from './projectFormSlice';
import { createProject } from '../ProjectList/ProjectList/projectListSlice';

import styles from './ProjectForm.module.css';

const ProjectForm = () => {
  // Use Hooks to Handle Local State for Form Data
  const [formData, setFormData] = useState({
    // -- orderState property may be edited in future feature
    orderState: 'Draft',
    nickname: '',
    location: '',
    client: '',
    company: '',
    deliveryDate: '',
    rentalTerm: '',
    tag: '',
  });

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


  // ---- Handle Form Submission 
  // ### implent async reducer to Post to DB
  
  // Dispatches Form State to Redux Store
  const dispatch = useDispatch();
  const formSubmissionHandler = e => {
    e.preventDefault();
    // console.log(formData)
    const newProject = {
      ...formData,
      date: new Date(formData.date).toLocaleString()
    }

    dispatch(createProject(newProject));
  }
  

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <h2>Project Profile</h2>
      
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









