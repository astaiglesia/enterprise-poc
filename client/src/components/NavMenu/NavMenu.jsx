import React, { useState } from "react";
import useToggle from '../../helpers/customHooks/useToggle';

import { Link } from "react-router-dom";

import styles from './NavMenu.module.css';

const NavMenu = () => {

  const [isToggled, setIsToggled] = useState(false);

  // ## need to handle key up, mouseover
  const toggleMenu = () => {
    // use callback when relying on previous state
    setIsToggled(prevState => !prevState);
  }

  const toggleClass = isToggled ? "styles.showMenu" : "";
  console.log(toggleClass)

  return (
      <nav className={styles['nav-menu']}>
        <button 
          className={styles['nav-button']}
          onClick={toggleMenu}
          // onMouseLeave={toggleMenu}
        >
          {isToggled ? "Close" : "Menu"}
        </button>

        <ul className={`${styles.navlist} ${isToggled ? styles.showNavList : ""}`} >
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