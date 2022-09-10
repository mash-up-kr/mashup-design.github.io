import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    padding: 0 2.4rem;
    width: 100%;
    min-height: 100vh;
    max-width: 120rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
    }
  `}
`;

export const ContentsSection = styled.div`
  flex-grow: 1;
`;
