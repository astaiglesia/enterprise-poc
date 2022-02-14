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

import styles from "./EditProjectPage.module.css";

import MainHeader from "../../components/MainHeader/MainHeader";

 
const EditProjectPage = () => {

  return (
    <React.Fragment>
      <MainHeader />
      <div>Page to Edit Orders From</div>
    </React.Fragment>
  )
};

export default EditProjectPage;