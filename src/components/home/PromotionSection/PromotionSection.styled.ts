import { css } from '@emotion/react';
import styled from '@emotion/styled';
import DrawingLineSvg from '@/assets/svg/drawing-line.svg';
import FourWayArrowSvg from '@/assets/svg/four-way-arrow.svg';
import MouseCursorSvg from '@/assets/svg/mouse-cursor.svg';
import SpeechBubbleSvg from '@/assets/svg/speech-bubble.svg';
import TIconSvg from '@/assets/svg/t.svg';
import HighlighterYellowSvg from '@/assets/svg/highlighter-yellow-no-shadow.svg';
import HighlighterRedSvg from '@/assets/svg/highlighter-red-no-shadow.svg';

export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.light.black};
  `}
`;

export const PromotionSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    margin: 0 auto;
    padding: 22.6rem 0 15.4rem;
    max-width: 120rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 11.3rem 0 12.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 22.8rem 0 5rem;
    }
  `}
`;

export const MainTextSection = styled.p`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    width: auto;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: auto;
    }
  `}
`;

export const MainText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.semibold72};
    display: block;
    color: ${theme.colors.light.white};
    letter-spacing: -0.015em;
    line-height: 1.2;

    &:nth-of-type(2) {
      margin-bottom: 0.5rem;
    }
    &:nth-of-type(3) {
      margin-bottom: 0.2rem;
    }
    &:nth-of-type(4) {
      position: relative;
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold36};
      line-height: 1.2;
      letter-spacing: -0.015em;

      &:nth-of-type(2) {
        margin-bottom: 0;
      }
      &:nth-of-type(3) {
        margin-bottom: 0;
      }
    }
  `}
`;

export const TextUnderLine = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0.6rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 61.6rem;
    height: 1.8rem;
    background: ${theme.colors.light.yellow300};
    opacity: 0.7;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: 30.4rem;
      height: 1.4rem;
      bottom: -0.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      height: 1.8rem;
    }
  `}
`;

export const DrawingLine = styled(DrawingLineSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 11.6rem;
    left: -12.873rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: -0.2rem;
      left: -18.413rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: -15.7rem;
      left: -2.6rem;
    }
  `}
`;

export const FourWayArrow = styled(FourWayArrowSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 7.3rem;
    left: 5.5rem;
    width: 3.6rem;
    height: 3.6rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: 5.2rem;
      left: 1.5rem;
      width: 2.9rem;
      height: 2.9rem;
    }
  `}
`;

export const SpeechBubble = styled(SpeechBubbleSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 0.7rem;
    right: 8.224rem;
    width: 3.388rem;
    height: 3.35rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: -1.1rem;
      right: 3.1rem;
      width: 2.7rem;
      height: 2.7rem;
    }
  `}
`;

export const TIcon = styled(TIconSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 9.3rem;
    right: 6.8rem;
    width: 2.6rem;
    height: 2.922rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: 4.5rem;
      right: 2.5rem;
      width: 2.1rem;
      height: 2.35rem;
    }
  `}
`;

export const MouseCursor = styled(MouseCursorSvg)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 9.3rem;
    right: 8.1rem;
    width: 3.05rem;
    height: 3.85rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      bottom: 4.1rem;
      right: 2.9rem;
      width: 2.45rem;
      height: 3.1rem;
    }
  `}
`;

export const HighlighterYellow = styled(HighlighterYellowSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 20.2rem;
    right: -21.1rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: 8.5rem;
      right: -14.5rem;
      width: 11.4rem;
      height: 8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: -9rem;
      right: -1.1rem;
      width: 8.6rem;
      height: 6rem;
    }
  `}
`;

export const HighlighterRed = styled(HighlighterRedSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: -11.4rem;
    right: -30.1rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      top: -5.3rem;
      right: -25.2rem;
      width: 11.4rem;
      height: 8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: -20.3rem;
      right: -2.8rem;
      width: 8.6rem;
      height: 6rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.medium20};
    margin-bottom: 4.3rem;
    text-align: center;
    color: ${theme.colors.light.gray100};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      margin-bottom: 3.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium16};
      padding: 0 2.4rem;
    }
  `}
`;

export const OfficialMashUpPageLink = styled.a`
  ${({ theme }) => css`
    ${theme.fonts.bold20};
    display: inline-block;
    padding: 2.2rem 6rem;
    line-height: 1.2;
    background: ${theme.colors.light.blue200};
    border-radius: 0.8rem;
    color: ${theme.colors.light.white};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold16};
      line-height: 1.5;
      padding: 1.4rem 7.6rem;
    }
  `}
`;
