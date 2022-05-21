import styled, { css } from "styled-components";

export const Wrapper = styled.tr`
  ${({ theme }) => css`
    td {
      padding: 1rem 2rem;
      border: 0;
      font-size: ${theme.font.sizes.xxsmall};
      background-color: ${theme.colors.white};
      color: ${theme.colors.text};
      border-radius: 0.25rem;

      &:first-of-type {
        color: ${theme.colors.title};
      }

      &.positive {
        color: ${theme.colors.green};
      }

      &.negative {
        color: ${theme.colors.red};
      }
    }
  `}
`;
