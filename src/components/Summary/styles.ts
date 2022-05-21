import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    padding: 0 ${theme.spacings.medium};

    &::before {
      content: "";
      position: absolute;
      background-color: ${theme.colors.blue};
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      z-index: -1;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    overflow-x: scroll;
    gap: ${theme.spacings.xsmall};

    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 768px) {
      & > div:first-of-type {
        margin-left: ${theme.spacings.small};
      }

      & > div:last-of-type {
        margin-right: ${theme.spacings.small};
      }
    }

    @media screen and (min-width: 768px) {
      margin: 0 auto;
      max-width: 1224px;
      overflow: hidden;
      width: 100%;
      justify-content: stretch;
    }
  `}
`;
