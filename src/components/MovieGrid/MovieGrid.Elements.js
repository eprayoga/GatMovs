import styled from "styled-components";

export const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const LoadMore = styled.div`
  text-align: center;
`;

export const MovieSearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  input {
    width: 100%;
    padding-right: 8rem;
  }

  button {
    position: absolute;
    right: 0;
    top: 2px;

    @media screen and (max-width: 600px) {
      right: 1px;
      top: 1px;
    }
  }
`;

export const SearchSection = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;
`;
