import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  padding: 6rem 2rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
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

export const ContenMenus = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: 600;

  & > * ~ * {
    margin-top: 1rem;
  }
`;
