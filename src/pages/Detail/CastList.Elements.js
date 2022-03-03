import styled from "styled-components";

export const Casts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 10px;
`;

export const CastsItem = styled.div``;

export const ItemImg = styled.div`
  padding-top: 160px;
  margin-bottom: 0.5rem;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  border-radius: 10px;
`;

export const ItemName = styled.p`
  font-size: 0.8rem;
`;
