import React, { useState} from 'react';

import styles from './LoginPage.module.css';

import LoginModal from './LoginModal/LoginModal';


const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  const loginHandler = (e) => {
    console.log('open login overlay');
    // login should open login modal
    setIsModalOpen(currentState => !currentState);
    
    // removes focus after clicking ... should we maintain focus after opening modal?
    // e.target.blur();
  }
  
  const ssoHandler = (e) => {
    console.log('send to google');
    // e.target.blur();
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

      <main>
        {/* <LoginModal /> */}
        {(isModalOpen) ? <LoginModal /> : <div>zzlogo</div>}
      </main>
      
      <footer className={styles['login-footer']}>
        <p>sunset-sessions</p>
      </footer>
    </div>
  )
}

export default LoginPage;