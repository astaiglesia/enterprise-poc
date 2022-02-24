/**
* ********************************************************
*
* @module  App
* @author  astaiglesia
* @date    2022
* @description Manage Project(s) Page -> rendered content based on project selection
*
* ********************************************************
*/
import React from "react";

import styles from "./ManageProjectPage.module.css";

import MainHeader from "../../components/MainHeader/MainHeader";
// import ProjectHero from "../../features/ManageContent/ProjectHero/ProjectHero";
import ManageContent from '../../features/ManageContent/ManageContent'
import MainFooter from "../../components/MainFooter/MainFooter";

const ManageProjectPage = () => {
  
  return (
    <div className={styles.pages}>
      <MainHeader />
      {/* <ProjectHero /> */}
      <ManageContent />
      <MainFooter />
    </div>
  )
};

export default ManageProjectPage;