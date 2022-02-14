/**
* ********************************************************
*
* @module  App
* @author  astaiglesia
* @date    2022
* @description Order Editing Page -> rendered components dependant on order state
*
* ********************************************************
*/

import React from "react";

import styles from "./ManageProjectPage.module.css";

import MainHeader from "../../components/MainHeader/MainHeader";
import MainHero from "../../components/MainHero/MainHero";
import Content from "../../components/Content/Content";
import MainFooter from "../../components/MainFooter/MainFooter";

 
const ManageProjectPage = () => {

  return (
    <div className={styles.pages}>
      <MainHeader />
      <MainHero 
        heading="Manage a project" 
        message="View, develop and refine your project's product mix, state and order details"
      />
      {/* <Content /> */}
      <MainFooter />
    </div>
  )
};

export default ManageProjectPage;