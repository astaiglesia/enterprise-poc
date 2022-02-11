import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  changeNickname, 
  changeLocation, 
  changeClient, 
  selectNickname,
} from './projectFormSlice';

import styles from './ProjectForm.module.css';

const ProjectForm = () => {
  // select and use initial state
  const [newNickname, setNewNickname] = useState(useSelector(state => state.projectForm.nickname));
  
  const dispatch = useDispatch();
  
  console.log(newNickname)

  return (
    <form className={styles.form} onSubmit={e => {
        e.preventDefault();
        console.log('form submitted')}
      } >
      <h2>Project Profile</h2>
      
      <label htmlFor="nickname" >Project Nickname* </label>
      <input type="text" 
              name="nickname" 
              id="nickname" 
              // required={true} 
              onChange={(e) => setNewNickname(e.target.value)} ></input>
      
      {/* refactor to pre-populate based on zip - JS30 */}
      <label htmlFor="location" >Location / City* </label>
      <input type="text" name="location" id="location" ></input>
      
      <label htmlFor="client" >Client</label>
      <input type="text" name="client" id="client" ></input>
      
      <button type="submit" >Create Draft Project</button>

      <div>{newNickname}</div>
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