import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import StarSvg from '@/assets/svg/star.svg';
import HighlighterYellowSvg from '@/assets/svg/highlighter-yellow-no-shadow.svg';
import HighlighterBlueSvg from '@/assets/svg/highlighter-blue-no-shadow.svg';
import HighlighterRedSvg from '@/assets/svg/highlighter-red-no-shadow.svg';
import { HighlightColor } from './SubHeader';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 40rem;
    background: ${theme.colors.light.gray50};

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

    & > span {
      position: relative;
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.semibold60};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold40};
      margin: 0 0.8rem 0;
    }
  `}
`;

const getHighlightColor = (theme: Theme, color: HighlightColor) => {
  const { blue100, red100, yellow100 } = theme.colors.light;
  if (color === 'blue') return blue100;
  if (color === 'red') return red100;
  return yellow100;
};

export const Underline = styled.div<{ color: HighlightColor }>`
  ${({ theme, color }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    background: ${getHighlightColor(theme, color)};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold40};
      height: 1.2rem;
    }
  `}
`;

export const Star = styled(StarSvg)<{ color: HighlightColor }>`
  ${({ theme, color }) => css`
    width: 3.2rem;
    height: 3.2rem;

    & path {
      fill: ${getHighlightColor(theme, color)};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

const highlighterStyle = (theme: Theme) => css`
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
`;

const HighlighterYellow = styled(HighlighterYellowSvg)`
  ${({ theme }) => css`
    ${highlighterStyle(theme)};
  `}
`;
const HighlighterBlue = styled(HighlighterBlueSvg)`
  ${({ theme }) => css`
    ${highlighterStyle(theme)};
  `}
`;
const HighlighterRed = styled(HighlighterRedSvg)`
  ${({ theme }) => css`
    ${highlighterStyle(theme)};
  `}
`;

export const highlighters = {
  yellow: HighlighterYellow,
  blue: HighlighterBlue,
  red: HighlighterRed,
};

export const Description = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.medium20};
    color: ${theme.colors.light.gray300};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium16};
    }
  `}
`;
