import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className="menu-overlay" onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return <div>{props.children}</div>;
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
