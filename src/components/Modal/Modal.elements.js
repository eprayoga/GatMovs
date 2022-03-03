import styled from "styled-components";

export const ModalContentComponent = styled.div`
  padding: 2rem;
  background-color: #0f0f0f;
  width: 50%;
  opacity: 0;
  transform: translateY(-250px);
  transition: transform 0.6s ease, opacity 0.6s ease;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const ModalComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &.active ${ModalContentComponent} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContentClose = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;
