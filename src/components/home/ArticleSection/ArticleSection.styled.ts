import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ArticleSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    grid-template-columns: calc(50% - 1.5rem) calc(50% - 1.5rem);
    grid-template-rows: auto 40.4rem;
    column-gap: 3rem;
    row-gap: 3.6rem;
    padding: 5rem 0 0;

    & > article {
      &:first-of-type {
        grid-column: 1 / 3;
      }

      &:nth-of-type(2) {
        grid-column: 1 / 2;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      grid-template-rows: auto 53.1vw;
      column-gap: 3.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      grid-template-columns: 100%;
      grid-template-rows: 119.45vw 119.45vw;

      & > article {
        &:first-of-type {
          grid-column: 1 / 2;
        }
      }
    }
  `}
`;
