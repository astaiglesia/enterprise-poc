// create local state to gather form data
// dispatch to redux-thunk for async authentication
// on validation redirect to dashboard page

import React, { useState} from 'react';

import styles from './Login.module.css';

const LoginPage = () => {

  return (
    <div className={styles['login-page']} >
      
      <header className={styles['login-header']}>
        <h2>ZZ Driggs Enterprise Application</h2>
        <div className={styles['login-choices']}>
          <button type="button">login</button>
          <button type="button">G</button>
        </div>
      </header>

      <main>add a logo here</main>
      
      <footer>sunset-sessions</footer>
    </div>
  )
}

export default LoginPage;