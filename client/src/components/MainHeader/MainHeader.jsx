import React, { useState } from "react";

import styles from  "./MainHeader.module.css";
import zzSmallLogo from "../../assets/images/mstile-150x150.png";

import Menu from '../MainMenu/MainMenu';


const MainNav = () => {
    // toggle menu
    const [isMenuOpen, setIsMenuOpen ] = useState(false);

    // ## need to handle key up, mouseover?
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

  return (
    <header className={styles['main-header']}>
      <div>enterprise concept</div>
      
      <div>
        <button className={styles['menu-button']}>
          <img className={styles['logo-header']}  
              src={zzSmallLogo} 
              alt="zz logo" 
              width="50" 
              height="50" 
              onClick={toggleMenu}
              // onMouseLeave={toggleMenu}
              >
          </img> 
        </button>
        { isMenuOpen && <Menu /> }
      </div>


    </header>
  )
}

export default MainNav;