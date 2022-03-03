import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 100%;

        @media only screen and (max-width: 1024px) {
            font-size: 80%;
        }
        @media only screen and (max-width: 600px) {
            font-size: 60%;
        }
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        
        background-color: #0f0f0f;
        color: #fff;
        
        @media only screen and (max-width: 600px) {
            margin-bottom: 3rem;
        }
    }

    a {
        text-decoration: none;
        color: unset;
    }

    @media (hover: hover) {
        a:hover {
            color: #ff0000;
        }
    }

    button, input {
        outline: 0;
    }

    ul {
        list-style-type: none;
    }

    img {
        max-width: 100%;
    }

    iframe {
        border: 0;
    }

    .mb-3 {
        margin-bottom: 3rem;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }
`;

export const Container = styled.div`
  max-width: 1660px;
  margin: auto;
`;

export const Section = styled.div`
  padding: 0 2rem;
`;

export const SectionCatalog = styled.div`
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export default GlobalStyle;
