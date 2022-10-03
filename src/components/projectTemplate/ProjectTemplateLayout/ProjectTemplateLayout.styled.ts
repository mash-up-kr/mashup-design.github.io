import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProjectTemplateLayout = styled.div`
  ${({ theme }) =>
    css`
      margin: 0 auto;
      padding-top: 8rem;
      max-width: 120rem;

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        padding-top: 6.4rem;
      }
    `}
`;
