import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins-v9-latin-regular.woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    ${({ theme }) => css`
      html {
        font-family: ${theme.font.family};
        font-size: 62.5%;
        scroll-behavior: smooth;
      }

      body {
        background-color: ${theme.colors.background};
      }
    `}
`;

// html {
//   @media (max-width: 1080px) {
//     font-size: 93.75%; // 15px
//   }

//   @media (max-width: 720px) {
//     font-size: 87.5%; // 14px
//   }
// }
