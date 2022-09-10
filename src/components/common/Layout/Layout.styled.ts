import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 8rem 2.4rem 0;
    width: 100%;
    max-width: 120rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
    }
  `}
`;
