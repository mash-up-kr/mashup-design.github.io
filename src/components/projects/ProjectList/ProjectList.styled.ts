import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProjectList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 36.4rem);
    grid-auto-rows: 43rem;
    column-gap: 3rem;
    row-gap: 5.7rem;
    padding: 0 2.4rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      grid-template-columns: repeat(2, 44.94vw);
      grid-auto-rows: 53.09vw;
      column-gap: 3.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      grid-template-columns: 100%;
      grid-auto-rows: 119.45vw;
      column-gap: 0;
    }
  `}
`;
