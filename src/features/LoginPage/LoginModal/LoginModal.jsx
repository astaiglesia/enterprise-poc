// need to hide password
// need to reset the form fields on submit

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { toggleLoginModal } from '../loginPageSlice';
import { attemptLogin } from "./loginModalSlice";
import styles from './LoginModal.module.css';

const ModalBackdrop = () => {
  const isModalOpen = useSelector(state => {
    return state.login.isModalOpen;
  });

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    console.log('close login overlay');
    // toggles modal
    dispatch(toggleLoginModal(!isModalOpen));
  }

  return (
    <div className={styles.backdrop} onClick={closeModalHandler} />
  );
};

// ---- OVERLAY COMPONENT ----
const LoginOverlay = () => {
  // set up local state to collect form data
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

  // dispatch to redux-thunk for authentication
  // -- if validated, redirect to dashboard page
  // -- on fail, render fail
  const dispatch = useDispatch();
  const [isValidUser, setIsValidUser] = useState(false);
  const [didAuthFail, setDidAuthFail] = useState(false);

  const loginAttemptHandler = e => {
    e.preventDefault();
    e.target.blur();

    dispatch(attemptLogin(formData));
    // create asyncAttemptLogin
    
    // -- handle promise onFulfillment
    // (isValidUser) ? <redirect to dashboard> : set
    setIsValidUser(currentState => !currentState); // mocks a valid return

    // handle authentication failure
    setDidAuthFail(currentState => {
      setFormData(initialState);
      return !currentState
    }); // mocks an auth fail
  }
  // ---- END OVERLAY COMPONENT ----

  const guestPassHandler = () => {
    console.log('guest entry')
  }

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
        <button type="button" aria-label="Guest Entry" onClick={guestPassHandler}>guest pass</button>
      </form>
    </div>
  );
};


const LoginModal = () => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<LoginOverlay />, document.getElementById('overlay-root'))}

    </React.Fragment>
  )
};

export default LoginModal;