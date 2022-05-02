import React from "react";
import ReactDOM from 'react-dom';

import ModalBackdrop from "./Backdrop/Backdrop";
import LoginOverlay from "./Overlay/Overlay";

const LoginModal = () => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<LoginOverlay />, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
};

export default LoginModal;