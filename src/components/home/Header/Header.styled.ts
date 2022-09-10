import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HighlighterSvg from '@/assets/svg/highlighter.svg';
import ShovelSvg from '@/assets/svg/shovel.svg';
import ShovelNoShadowSvg from '@/assets/svg/shovel-no-shadow.svg';
import StarSvg from '@/assets/svg/star.svg';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 8.7rem 0 4rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 10.3rem 0 3.9rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 13.25rem 0 4.8rem;
    }
  `}
`;

export const HeadingWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 46.6rem;
    margin: 0 auto 5.2rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: 42.7rem;
      margin-bottom: 4.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 25.9rem;
      margin-bottom: 4rem;
    }
  `}
`;

export const HeadingText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.semibold72};
    display: block;
    text-align: center;
    color: ${theme.colors.light.black};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.semibold66};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold40};
    }
  `}
`;

export const Highlighter = styled(HighlighterSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 6.6rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: ${theme.zIndex.textBackground};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: 5.4rem;
      width: 27.7rem;
      height: 11.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 3.1rem;
      width: 17.6rem;
      height: 7.2rem;
    }
  `}
`;

export const FlexBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 22.1rem 0 19.6rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 0;
      margin: 0 auto;
      width: 49.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      margin: 0 auto;
      width: auto;
    }
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.semibold24};
    display: block;
    text-align: center;
    color: ${theme.colors.light.gray400};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold20};
      margin-bottom: 2rem;
    }
  `}
`;

export const ExternalLinkItem = styled.li`
  ${({ theme }) => css`
    display: inline-block;
    margin-right: 6.5rem;

    &:last-of-type {
      margin-right: 0;
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      display: list-item;
      margin-right: 0;
      margin-bottom: 1.2rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: inline-block;
      margin-right: 2rem;
      margin-bottom: 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  `}
`;

export const ExternalLink = styled.a`
  ${({ theme }) =>
    css`
      ${theme.fonts.semibold24};
      position: relative;
      color: ${theme.colors.light.gray400};
      text-decoration: underline;
      text-underline-position: under;

      & svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.4rem;
        margin-bottom: 0.3rem;
      }

      &:hover {
        & > div {
          background: ${theme.colors.light.yellow200};
          opacity: 0.6;
        }
      }

      @media (max-width: ${theme.breakPoint.media.tablet}) {
        & svg {
          margin-bottom: 0.2rem;
        }
      }

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        ${theme.fonts.semibold20};

        & svg {
          margin-bottom: 0;
        }
      }
    `}
`;

export const HoverUnderline = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -0.77rem;
    left: 0;
    width: 100%;
    height: 1.4rem;
    z-index: ${theme.zIndex.textBackground};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 1.2rem;
    }
  `}
`;

export const Star = styled(StarSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 18rem;
    left: -6.1rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: 3.2rem;
      height: 3.2rem;
      top: 17rem;
      left: -5.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 2rem;
      height: 2rem;
      top: 10.3rem;
      left: -2.7rem;
    }
  `}
`;

export const Shovel = styled(ShovelSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: -0.2rem;
    left: 40.2rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: 3.3rem;
      left: 37.8rem;
      width: 17.8rem;
      height: 16.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: none;
    }
  `}
`;

export const ShovelNoShadow = styled(ShovelNoShadowSvg)`
  ${({ theme }) => css`
    display: none;
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: absolute;
      display: inline-block;
      top: -8rem;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      width: 88rem;
      height: 6rem;
    }
  `}
`;
