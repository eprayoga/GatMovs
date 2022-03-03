import styled from "styled-components";
import { ButtonComponent } from "../Button/Button.Elements";

export const MovieCardContainer = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 160%;
  border-radius: 30px;
  margin-bottom: 1rem;

  ${ButtonComponent} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &::before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 30px;
  }

  @media (hover: hover) {
    &:hover::before {
      opacity: 0.8;
    }

    &:hover ${ButtonComponent} {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Title = styled.h3``;
