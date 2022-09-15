import { css } from '@emotion/react';
import styled from '@emotion/styled';
import StarSvg from '@/assets/svg/star.svg';
import HighlighterSvg from '@/assets/svg/highlighter-yellow-no-shadow.svg';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 40rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 32rem;
    }
  `}
`;

export const HeadingSection = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: flex-end;
    margin: 16.5rem 0 4rem 0;
    padding-left: 6rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding-left: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      flex-flow: column nowrap;
      align-items: center;
      margin: 9.4rem 0 3rem 0;
      padding-left: 0;
    }
  `}
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.semibold72};
    position: relative;
    margin: 0 0.8rem 0 1.6rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.semibold60};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold40};
      margin: 0 0.8rem 0;
    }
  `}
`;

export const Underline = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    background: ${theme.colors.light.yellow100};
    z-index: ${theme.zIndex.textBackground};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold40};
      height: 1.2rem;
    }
  `}
`;

export const Star = styled(StarSvg)`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const Highlighter = styled(HighlighterSvg)`
  ${({ theme }) => css`
    filter: drop-shadow(16px 52px 32px rgba(115, 112, 151, 0.16));

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: 11.6rem;
      height: 8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      order: -1;
      margin-bottom: 1.6rem;
      width: 8.8rem;
      height: 6rem;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.medium20};
    color: ${theme.colors.light.gray300};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium16};
    }
  `}
`;
