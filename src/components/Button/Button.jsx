import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "./Button.Elements";

const Button = (props) => {
  return (
    <ButtonComponent
      small={props.small}
      btnOutline={props.btnOutline}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </ButtonComponent>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  small: PropTypes.bool,
  btnOutline: PropTypes.bool,
};

export default Button;
