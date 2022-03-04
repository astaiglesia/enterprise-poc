import React from "react";
import { Link } from "react-router-dom";

import styles from './MainMenu.Module.css';


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

export default Menu;