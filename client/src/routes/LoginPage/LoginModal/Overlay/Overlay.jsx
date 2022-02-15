import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from './Overlay.module.css';

import { attemptLogin } from "./../loginModalSlice";


// ---- OVERLAY COMPONENT ----
// local state collects form data and dispatches to redux-thunk
const LoginOverlay = () => {
  const initialState = {
    user: '',
    password: '',
  }
  
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  



// ###=========== WORK ON AUTHENTICATION LOGIC =========###
  // dispatch to redux-thunk for authentication
  // -- if validated, redirect to dashboard page
  // -- on fail, render fail
  const [isValidUser, setIsValidUser] = useState(false);
  const [didAuthFail, setDidAuthFail] = useState(false);
  console.log(isValidUser, didAuthFail);

  // ---- handle site entry for auth'd users and guests with no login
  const validEntryHandler = useCallback(() => navigate('/dashboard'), [navigate]);

  const loginAttemptHandler = e => {
    e.preventDefault();
    // e.target.blur();

    // call async AttemptLogin
    dispatch(attemptLogin(formData));
    
    // -- handle promise onFulfillment ### currently mocking a valid authentication
    setIsValidUser(current => !current);  // <----- mock successful user auth
  }
  
  useEffect( () => {
    if (isValidUser) {
      console.log('are we reaching this?', isValidUser)
      return validEntryHandler();
    } 
    // else {
    //   // handle authentication failure  // mocks an auth fail
    //   setDidAuthFail(currentState => {
    //     setFormData(initialState);
    //     return !currentState;
    //   }); 
    // }
  }, [isValidUser, validEntryHandler]);

  return (
    <div className={styles.modal} >
      <form className={styles['login-form']} onSubmit={loginAttemptHandler} >
                  
        <label htmlFor="user" >user</label>
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
        {(didAuthFail) && <div className={styles.loginFail}>login failed</div>}

        {/* temporary login bypass */}
        <button type="button" aria-label="Guest Entry" onClick={validEntryHandler}>guest pass</button>
      </form>
    </div>
  );
};

export default LoginOverlay;