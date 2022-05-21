import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    padding: ${theme.spacings.small};
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 1224px;
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  height: 33px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBlue};
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    color: white;
    font-weight: bold;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxxsmall};
    border-radius: ${theme.border.medium};

    @media screen and (min-width: 768px) {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
  `}
`;

export const CardList = styled.div``;
