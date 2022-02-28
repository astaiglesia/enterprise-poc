// need to rename component and refactor for 'MainNav' before codesplitting

import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from  "./MainHeader.module.css";
import zzSmallLogo from "../../assets/images/mstile-150x150.png"



const Menu = () => {

  return (
    <section className={styles.menu}>
      <nav className={styles.quicklinks} >
        <Link className={styles.navlink} to="/dashboard" >Dashboard</Link>
        <Link className={styles.navlink} to="/projects" >Projects</Link>
        <Link className={styles.navlink} to="/manage" >Manage</Link>
        <Link className={styles.navlink} to="/projects">settings</Link>
        <Link className={styles.navlink} to="/">logout</Link>
      </nav>
        {/* <div>
          <a href="https://a11y-style-guide.com/style-guide/section-navigation.html">remember to make it accessible!</a>
        </div> */}
    </section>
  )
}


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
      
      <img className={styles['logo-header']}  
          src={zzSmallLogo} 
          alt="zz logo" 
          width="50" 
          height="50" 
          onClick={toggleMenu}
          >
      </img> 

      { isMenuOpen && <Menu /> }

    </header>
  )
}

export default MainNav;