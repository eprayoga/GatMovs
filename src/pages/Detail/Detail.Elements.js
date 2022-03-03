import styled from "styled-components";

export const Banner = styled.div`
  height: 50vh;
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
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
`;

export const MovieContent = styled.div`
  max-width: 1260px;
  margin: auto;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  position: relative;
  padding: 0 2rem;
`;

export const Poster = styled.div`
  flex: 1;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const PosterImg = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  padding-top: 165%;
`;

export const Info = styled.div`
  width: 70%;
  padding-left: 2rem;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0;
  }

  & > * {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1;
`;

export const Genres = styled.div`
  & > * ~ * {
    margin-left: 0.5rem;
  }
`;

export const GenresItem = styled.span`
  padding: 0.5rem 1.5rem;
  border: 2px solid #fff;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #0f0f0f;
`;

export const Overview = styled.p``;

export const Cast = styled.div``;

export const SectionHeader = styled.div``;

export const VideoListContainer = styled.div`
  max-width: 1660px;
  margin: auto;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export const Similar = styled.div`
  padding: 0 2rem;
  margin-bottom: 3;
`;

export const SimilarHeader = styled.div`
  margin-bottom: 2rem;
`;
