import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  Content,
  ContentLogo,
  Logo,
  ContenMenus,
  Menu,
} from "./Footer.Elements";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";

const Footer = () => {
  return (
    <FooterContainer background={bg}>
      <Content>
        <ContentLogo>
          <Logo>
            <img src={logo} alt="" />
            <Link to="/">GatMovs</Link>
          </Logo>
        </ContentLogo>
        <ContenMenus>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/">Contack us</Link>
            <Link to="/">Term of Services</Link>
            <Link to="/">About</Link>
          </Menu>
          <Menu>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </Menu>
          <Menu>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent Release</Link>
            <Link to="/">Top IMDB</Link>
          </Menu>
        </ContenMenus>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
