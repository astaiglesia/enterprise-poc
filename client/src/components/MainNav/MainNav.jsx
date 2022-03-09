import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from './MainNav.module.css';

const NavMenu = () => {
  // toggle menu
  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  // ## need to handle key up, mouseover
  const toggleMenu = () => {
    // use callback when relying on previous state
    setIsMenuOpen(prevState => !prevState)
  }

  const toggleClass = isMenuOpen ? "styles.showMenu" : "";
  console.log(toggleClass)

  return (
      <nav className={styles['nav-menu']}>

        <button 
          className={styles['nav-button']}
          onClick={toggleMenu}
          // onMouseLeave={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <ul className={`${styles.navlist} ${isMenuOpen ? styles.showNavList : ""}`} >
          <Link className={styles.navlink} to="/dashboard" >Dashboard</Link>
          <Link className={styles.navlink} to="/projects" >Projects</Link>
          <Link className={styles.navlink} to="/manage" >Manage</Link>
          <Link className={styles.navlink} to="/projects">settings</Link>
          <Link className={styles.navlink} to="/">logout</Link>
        </ul>

      </nav>

  )
}

export default NavMenu;