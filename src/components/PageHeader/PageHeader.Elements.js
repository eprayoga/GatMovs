import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  padding: 8rem 0 2rem;
  text-align: center;
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    position: relative;
    z-index: 99;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;
