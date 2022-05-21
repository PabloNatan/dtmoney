import styled, { css } from "styled-components";

type WrapperProps = {
  total?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, total }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.medium};
    min-width: 60vw;

    @media screen and (min-width: 768px) {
      width: 100%;
      min-width: initial;
    }

    ${total &&
    css`
      background-color: ${theme.colors.green};
      h4,
      p {
        color: ${theme.colors.white};
      }
    `}
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.xxsmall};

    @media screen and (min-width: 768px) {
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
  `}
`;

export const Value = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.large};
    line-height: 4rem;
    margin-top: -1.5rem;
    font-weight: 600;
  `}
`;

export const Date = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};

    @media screen and (min-width: 768px) {
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;
