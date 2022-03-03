import React from "react";
import { InputContainer } from "./Input.Element";

const Input = (props) => {
  return (
    <InputContainer
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
