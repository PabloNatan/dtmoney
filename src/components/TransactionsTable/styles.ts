import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1224px;
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: 600;
      padding: 0.6rem 1.5rem;
      text-align: left;
      line-height: 2rem;
    }
  `}
`;
