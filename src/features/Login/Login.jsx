// create local state to gather form data
// dispatch to redux-thunk for async authentication
// on validation redirect to dashboard page

import React, { useState} from 'react';

import styles from './Login.module.css';

const LoginPage = () => {

  const loginHandler = (e) => {
    console.log('open login overlay');
    // login should open login modal
    // login modal should provide sign-in fields and create account link
    // -- on user authentication redirect to dashboard
    e.target.blur();
  }
  
  const ssoHandler = (e) => {
    console.log('send to google');
    e.target.blur();
  }

  return (
    <div className={styles['login-page']} >
      
      <header className={styles['login-header']}>
        <h2>ZZ Driggs Enterprise Application</h2>
        <div className={styles['login-choices']}>
          <button type="button" onClick={loginHandler}>login</button>
          <button type="button" onClick={ssoHandler}>G</button>
        </div>
      </header>

      <main>add zz logo</main>
      
      <footer className={styles['login-footer']}>
        <p>sunset-sessions</p>
      </footer>
    </div>
  )
}

export default LoginPage;