import React from "react";
import useToggle from '../../helpers/customHooks/useToggle';

import { Link } from "react-router-dom";

import styles from './NavMenu.module.css';

const NavMenu = () => {

  const [isToggled, setIsToggled] = useToggle(true);

  // ## need to handle key up, mouseover
  const toggleMenu = () => {
    setIsToggled(prevState => !prevState);
  }

  const toggleClass = isToggled ? "styles.showMenu" : "";
  console.log(toggleClass)

  return (
      <nav className={styles['nav-menu']}>

        <ul className={`${styles.navlist} ${isToggled ? styles.showNavList : ""}`} >
          <Link className={styles.navlink} to="/dashboard" >Dashboard</Link>
          <Link className={styles.navlink} to="/projects" >Projects</Link>
          <Link className={styles.navlink} to="/manage" >Manage</Link>
          <Link className={styles.navlink} to="/projects">Settings</Link>
          <Link className={styles.navlink} to="/">Logout</Link>
        </ul>

        <button 
          className={`${styles['nav-button']} ${styles['nav-close']}`}
          onClick={toggleMenu}
        >
          {isToggled ? "Hide Menu" : "Menu"}
        </button>
      </nav>

  )
}

export default NavMenu;