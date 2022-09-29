import { css } from '@emotion/react';
import styled from '@emotion/styled';
import StartSvg from '@/assets/svg/star.svg';
import HighlightsSvg from '@/assets/svg/highlights.svg';

export const ArticleDetailHeader = styled.div`
  ${({ theme }) => css`
    padding: 6rem 19.2rem 6.2rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 6rem 13.3rem 6.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 3rem 1.6rem 3.1rem;
    }
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.regular14};
    padding: 0.5rem 1.3rem;
    border-radius: 4rem;
    background: #f4f3fb;
    color: ${theme.colors.light.gray300};
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.semibold66};
    position: relative;
    margin: 3.1rem 0 5rem;
    color: ${theme.colors.light.black};
    text-align: center;
    word-break: keep-all;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.semibold40};
      margin: 3.6rem 0 5rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold24};
      margin: 2.1rem 0 3rem;
    }
  `}
`;

export const CreateAt = styled.time`
  ${({ theme }) => css`
    ${theme.fonts.regular20};
    color: ${theme.colors.light.gray200};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.regular14};
    }
  `}
`;

export const Highlights = styled(HighlightsSvg)`
  ${({ theme }) =>
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      z-index: ${theme.zIndex.textBackground};
      width: 43rem;
      height: 17.6rem;

      & path {
        fill: ${theme.colors.light.blue100};
      }

      @media (max-width: ${theme.breakPoint.media.tablet}) {
        width: 32.2rem;
        height: 13.2rem;
      }

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        width: 22rem;
        height: 9rem;
      }
    `}
`;

export const LeftStar = styled(StartSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: -3.5rem;
    left: -3.8rem;
    width: 3.8rem;
    height: 3.8rem;

    & path {
      fill: ${theme.colors.light.blue100};
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: -3.2rem;
      left: -6.3rem;
      width: 2.8rem;
      height: 2.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: -1.7rem;
      left: 0.2rem;
      width: 1.9rem;
      height: 1.9rem;
    }
  `}
`;

export const RightStar = styled(StartSvg)`
  ${({ theme }) => css`
    position: absolute;
    bottom: -0.1rem;
    right: -4rem;

    width: 2.8rem;
    height: 2.8rem;

    & path {
      fill: ${theme.colors.light.blue100};
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      bottom: -2.7rem;
      right: -6.3rem;
      width: 2.1rem;
      height: 2.1rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      bottom: -1.2rem;
      right: -0.6rem;
      width: 1.4rem;
      height: 1.4rem;
    }
  `}
`;
