import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import {
  HeaderComponent,
  Logo,
  Navbar,
  NavList,
  Wrapper,
} from "./Header.Elements";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const [onShrink, setOnShrink] = useState(false);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setOnShrink(true);
      } else {
        setOnShrink(false);
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <HeaderComponent shrink={onShrink}>
      <Wrapper>
        <Logo>
          <img src={logo} alt="" />
          <Link to="/">GatMovs</Link>
        </Logo>
        <Navbar>
          {headerNav.map((e, i) => (
            <NavList key={i} active={i === active}>
              <Link to={e.path}>{e.display}</Link>
            </NavList>
          ))}
        </Navbar>
      </Wrapper>
    </HeaderComponent>
  );
};
export default Header;
