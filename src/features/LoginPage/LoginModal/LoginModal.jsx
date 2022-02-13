// create local state to gather form data
// dispatch to redux-thunk for async authentication
// on validation redirect to dashboard page

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { attemptLogin } from "./loginModalSlice";
import styles from './LoginModal.module.css';

const LoginModal = () => {
  // set up local state to collect form data
  const initialState = {
    user: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);

  const userHandler = e => {
    setFormData(currentState => {
      return {
        ...currentState,
        user: e.target.value,
      }
    })
  }

  const passwordHandler = e => {
    setFormData(currentState => {
      return {
        ...currentState,
        password: e.target.value,
      }
    })
  }

  // dispatch to redux-thunk for authentication
  // -- if validated, redirect to dashboard page
  // -- on fail, render fail
  const dispatch = useDispatch();


  const loginAttemptHandler = e => {
    e.preventDefault();

    dispatch(attemptLogin(formData));
  }

  return (
    <React.Fragment>
      <form className={styles.modalContainer} onSubmit={loginAttemptHandler} >
        <h3>sign in to your account</h3>
        
        <label htmlFor="user" >username</label>
        <input type="text" 
                name="user" 
                id="user" 
                value={formData.user}
                required={true} 
                onChange={userHandler} >
        </input>
        
        <label htmlFor="password" >password</label>
        <input type="text" 
                name="password" 
                id="password" 
                value={formData.password}
                required={true} 
                onChange={passwordHandler} >
        </input>

        <button type="submit" aria-label="Submit login credentials" >login</button>
      </form>
    </React.Fragment>
  )
};

export default LoginModal;