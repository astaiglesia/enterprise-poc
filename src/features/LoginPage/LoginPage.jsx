import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from './LoginPage.module.css';
import zzLogo from '../../assets/images/android-chrome-192x192.png'

import LoginModal from './LoginModal/LoginModal';
import { toggleLoginModal } from './loginPageSlice';



const LoginPage = () => {
  const isModalOpen = useSelector(state => {
    return state.login.isModalOpen;
  });
  
  const dispatch = useDispatch();
  
  const loginHandler = () => {
    console.log('open login overlay');
    dispatch(toggleLoginModal(!isModalOpen));
    
    // removes focus after clicking ... should we maintain focus after opening modal?
    // e.target.blur();
  }

  const ssoHandler = (e) => {
    console.log('send to google');
    // e.target.blur();
  }
  
  return (
    <div className={styles['login-page']} >
      
      {(isModalOpen) && <LoginModal />}
      
      <header className={styles['login-header']}>
        <h3>
          Enterprise Tracker
        </h3>
        <div className={styles['login-choices']}>
          <button type="button" onClick={loginHandler}>login</button>
          <button type="button" onClick={ssoHandler}>G</button>
        </div>
      </header>

      <main className={styles.loginMain}>
        <img src={zzLogo} alt="zz brand logo"></img> 
   
    
      </main>
      
      <footer className={styles['login-footer']}>
        <p><i>design&development: </i> <em>sunset-sessions</em></p>
      </footer>
    </div>
  )
}

export default LoginPage;