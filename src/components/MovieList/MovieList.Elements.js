import styled from "styled-components";

export const MovieListContainer = styled.div`
  .swiper-slide {
    width: 15%;

    @media screen and (max-width: 1024px) {
      width: 30%;
    }

    @media screen and (max-width: 600px) {
      width: 40%;
    }
  }
`;
