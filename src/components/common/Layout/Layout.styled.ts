import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    padding: 8rem 2.4rem 0;
    width: 100%;
    min-height: 100vh;
    max-width: 120rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
    }
  `}
`;

export const Main = styled.main`
  flex-grow: 1;
`;
