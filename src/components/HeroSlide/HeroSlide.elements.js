import styled from "styled-components";

export const HeroSlideComponent = styled.div`
  margin-bottom: 3rem;
`;

export const HeroItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const Overview = styled.div`
  font-weight: 700;
`;

export const HeroButtons = styled.div`
  & > * ~ * {
    margin-left: 1rem;
  }
`;

export const HeroItemInfo = styled.div`
  width: 55%;
  padding: 0 3rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  & > * ~ * {
    margin-top: 3rem;
  }
`;

export const HeroItemPoster = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  position: relative;
  z-index: 1;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: transform 0.7s ease;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeroSlideItemComponent = styled.div`
  padding: 9rem 2rem;
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }

  ${HeroItemContainer} > ${HeroItemInfo} {
    ${Title}, ${Overview}, ${HeroButtons} {
      opacity: ${(props) => (props.active ? "1" : "0")};
      transform: ${(props) =>
        props.active ? "translateY(0)" : "translateY(-100px)"};
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    ${Title} {
      transition-delay: 0.3s, 0.3s;
    }

    ${Overview} {
      transition-delay: 0.6s, 0.6s;
    }

    ${HeroButtons} {
      transition-delay: 0.9s, 0.9s;
    }
  }

  ${HeroItemContainer} > ${HeroItemPoster} {
    img {
      transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
    }
  }
`;
