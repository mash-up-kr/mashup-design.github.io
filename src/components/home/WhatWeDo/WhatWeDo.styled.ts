import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WhatWeDoSection = styled.section`
  ${({ theme }) =>
    css`
      margin: 10rem 0 0;

      @media (max-width: ${theme.breakPoint.media.tablet}) {
        margin: 8rem 0 0;
      }

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        margin: 4.8rem 0 0;
      }
    `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.bold32};
    text-align: center;
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.light.black};
    margin: 13.8rem 0 0;
    padding: 14.8rem 9rem 0;
    height: 31.2rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 13.2rem 3.9rem 0;
      height: 22rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: relative;
      margin: 10rem 0 0;
      padding: 44.8rem 2rem 0;
      height: 63.6rem;
    }
  `}
`;

export const WhatWeDoCardSection = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.regular20};
    position: relative;
    margin: 0 auto;
    color: ${theme.colors.light.white};
    max-width: 102rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.regular14};
      word-break: keep-all;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: static;
      padding: 0 1.2rem;
    }
  `}
`;

export const CardList = styled.ul`
  ${({ theme }) =>
    css`
      position: absolute;
      top: -22.6rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;

      @media (max-width: ${theme.breakPoint.media.tablet}) {
        top: -23rem;
        gap: 2.2rem;
      }

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        top: -5.2rem;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        flex-flow: column nowrap;
        gap: 2.4rem;
        width: calc(100% - 4rem);
      }
    `}
`;

interface WhatWeDoCardProps {
  background: string;
  color: string;
}

export const WhatWeDoCard = styled.li<WhatWeDoCardProps>`
  ${({ theme, background, color }) => css`
    background: ${background};
    color: ${color};
    padding: 2.1rem 2.1rem 4.6rem;
    width: 32rem;
    border-radius: 1rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 2.1rem 1.6rem 7.8rem;
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 2.1rem 2.1rem 3.3rem;
    }
  `}
`;

export const CardHeading = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.bold32};
    margin-bottom: 0.9rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold24};
      margin-bottom: 1.3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold24};
      line-height: 1.5;
      margin-bottom: 1.6rem;
    }
  `}
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.semibold20};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.medium16};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium20};
      line-height: 1.5;
    }
  `}
`;
