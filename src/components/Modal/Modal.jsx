import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  ModalComponent,
  ModalContentComponent,
  ModalContentClose,
} from "./Modal.elements";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <ModalComponent id={props.id} className={`${active ? "active" : ""}`}>
      {props.children}
    </ModalComponent>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  return (
    <ModalContentComponent ref={contentRef} id={props.id}>
      {props.children}
      <ModalContentClose onClick={closeModal}>
        <i className="bx bx-x"></i>
      </ModalContentClose>
    </ModalContentComponent>
  );
};

ModalContent.prototype = {
  onClose: PropTypes.func,
};

export default Modal;
