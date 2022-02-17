/**
* ********************************************************
*
* @module  App
* @author  astaiglesia
* @date    2022
* @description Order Editing Page -> rendered content based on project selection
*
* ********************************************************
*/

import React from "react";

import styles from "./ManageProjectPage.module.css";

import MainHeader from "../../components/MainHeader/MainHeader";
import MainHero from "../../components/MainHero/MainHero";
import ManageContent from '../../features/ManageContent/ManageContent'
import MainFooter from "../../components/MainFooter/MainFooter";

 
const ManageProjectPage = () => {

  return (
    <div className={styles.pages}>
      <MainHeader />
      <MainHero 
        heading="Manage Your Project" 
        message="View, develop and refine your project's product mix, state and order details"
      />
      <ManageContent />
      <MainFooter />
    </div>
  )
};

export default ManageProjectPage;