import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100vw;
    background: ${theme.colors.light.white};
    border-top: 0.1rem solid ${theme.colors.light.gray100};
  `}
`;

export const FooterInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 6rem;
    align-items: center;
    max-width: 120rem;
    height: 20rem;

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
