import styled from "styled-components";

export const HeaderComponent = styled.div`
  padding: 0 2rem;
  height: ${(props) => (props.shrink ? "5rem" : "8rem")};
  background-color: ${(props) => (props.shrink ? "#0f0f0f" : "")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: height 0.3s ease, background-color 0.3s ease;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1660px;
  margin: auto;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: unset;

  img {
    margin: 10px;
    width: 50px;

    @media screen and (max-width: 600px) {
      width: 30px;
      margin-right: 0;
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: unset;

  & > * ~ * {
    margin-left: 2rem;
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: #0f0f0f;
    padding: 0 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * ~ * {
      margin-left: 0;
    }
  }
`;

export const NavList = styled.li`
  padding: 5px 0;
  font-weight: 700;
  position: relative;
  font-size: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "100%" : "0")};
    transition: width 0.5s ease;
    height: 2px;
    background-color: #ff0000;
  }

  &:hover::after {
    width: 100%;
  }
`;
