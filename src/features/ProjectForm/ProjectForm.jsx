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
    // company: '',
    // deliveryDate: '',
    // rentalTerm: '',
    // tag: '',
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


  // ---- Handle Form Submission To Update Redux Store ... and Post to DB
  const dispatch = useDispatch();
  
  const formSubmissionHandler = e => {
    e.preventDefault();
    // dispatch form data to store
    console.log(formData)
    dispatch(createProject(formData));
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
              value={formData.client}
              required={true} 
              onChange={clientHandler} >
      </input>
      
      <button type="submit" >Create Draft Project</button>
    </form>
  )
};

export default ProjectForm;










{/* <label htmlFor="proj-zip" >Zip</label>
<input type="number" name="proj-zip" id="proj-zip" ></input> */}
      // <label htmlFor="company" >Company</label>
      // <input type="text" name="company" id="company" ></input>
      

      // <label htmlFor="deliveryDate" >Delivery Date</label>
      // <input type="date" name="deliveryDate" id="deliveryDate" ></input>

      // <label htmlFor="rentalTerm" >Rental Term</label>
      // <select type="text" name="rentalTerm" id="rentalTerm" >
      //   <option value="1">1 Month</option>
      //   <option value="3">3 Months</option>
      //   <option value="6">6 Months</option>
      //   <option value="12" selected>12 Months</option>
      // </select>

      // <label htmlFor="tag" >Tag</label>
      // <input type="text" name="tag" id="tag" ></input>