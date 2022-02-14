import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from './Backdrop.module.css';

import { toggleLoginModal } from '../../loginPageSlice';

const ModalBackdrop = () => {
  const isModalOpen = useSelector(state => {
    return state.login.isModalOpen;
  });
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(toggleLoginModal(!isModalOpen));
  }

  return (
    <div className={styles.backdrop} onClick={closeModalHandler} />
  );
};

export default ModalBackdrop;