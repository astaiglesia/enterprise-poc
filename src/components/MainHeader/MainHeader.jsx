import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from  "./MainHeader.module.css";
import zzSmallLogo from "../../assets/images/mstile-150x150.png"

const MainHeader = () => {

  return (
    <header className={styles['main-header']}>

      <div className={styles['main-nav']}>
        <img classname={styles['logo-header']}  
            src={zzSmallLogo} 
            alt="zz logo" 
            width="100" 
            height="100" >
        </img> 
        <nav>
          <Link className={styles.navlink} to="/dashboard" >Dashboard |</Link>
          <Link className={styles.navlink} to="/projects" >Projects |</Link>
          <Link className={styles.navlink} to="/manage" >Manage</Link>
        </nav>
      </div>



      
      <nav>
        <Link className={styles.navlink} to="/projects">quick draft |</Link>
        <Link className={styles.navlink} to="/">logout</Link>
      </nav>
        {/* <div>
            codesplit to a nav component and add your nav items, <a href="https://a11y-style-guide.com/style-guide/section-navigation.html">remember to make it accessible!</a>
        </div> */}
    </header>
  )
}

export default MainHeader;