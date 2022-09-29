import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterWithTag = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  margin-bottom: 5rem;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0 2.4rem;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tag = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.bold14};
    padding: 0.8rem 1.4rem;
    border: 0;
    border-radius: 4rem;
    background: ${theme.colors.light.gray50};
    color: ${theme.colors.light.gray200};
  `}
`;
