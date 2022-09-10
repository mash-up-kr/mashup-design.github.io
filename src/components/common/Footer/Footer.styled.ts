import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    height: 20rem;
    width: 100%;
    max-width: 120rem;
    background: ${theme.colors.light.white};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      flex-flow: column nowrap;
      justify-content: center;
      gap: 2.4rem;
    }
  `}
`;

export const LogoTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.semibold16}
    margin-left: 0.8rem;
    color: ${theme.colors.light.gray400};
  `}
`;

export const FlexRowAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyRight = styled.small`
  ${({ theme }) => css`
    ${theme.fonts.medium16}
    display: block;
    margin-top: 0.4rem;
    color: ${theme.colors.light.gray300};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.regular14}
    }
  `}
`;

export const PlatformLink = styled.a`
  ${({ theme }) => css`
    margin-left: 2.4rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-left: 1.6rem;

      :first-of-type {
        margin-left: 0;
      }

      & > svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  `}
`;
