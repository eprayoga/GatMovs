import styled from "styled-components";

export const ButtonComponent = styled.button`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  border: ${(props) =>
    props.btnOutline ? "3px solid #fff" : "4px solid transparent"};
  border-width: ${(props) => (props.small ? "2px" : "")};
  background-color: ${(props) =>
    props.btnOutline ? "transparent" : " #ff0000"};
  color: #fff;
  border-radius: 30px;
  padding: ${(props) => (props.small ? "0.25rem 1.5rem" : "0.5rem 1.8rem")};
  font-size: ${(props) => (props.small ? "1rem" : "1.5rem")};
  font-weight: 600;
  box-shadow: ${(props) =>
    props.btnOutline ? "unset" : "0px 0px 7px 8px #ff00004d"};
  transition: ${(props) =>
    props.btnOutline
      ? "color .3s ease, background-color .3s ease"
      : "box-shadow 0.3s ease"};
  position: relative;

  &:hover {
    box-shadow: ${(props) =>
      props.btnOutline ? "unset" : "0px 0px 7px 15px #ff00004d"};
    color: ${(props) => (props.btnOutline ? "#ff0000" : "")};
    background-color: ${(props) => (props.btnOutline ? "#fff" : "")};
  }
`;
