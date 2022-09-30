import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ArticlePreviewWrapper = styled.article`
  position: relative;
`;

export const ArticlePreviewBackground = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1.6rem;
    background: #dad9e9;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndex.textBackground};
  `}
`;

export const ArticlePreview = styled.div`
  position: relative;
  box-shadow: 0rem 0.4rem 1.2rem rgba(46, 44, 44, 0.25);
  border-radius: 1.6rem;
  transition: 0.3s;
  height: 100%;

  @media (hover: hover) {
    &:hover {
      transform: translate3d(-1.8rem, -1.8rem, 0);
    }
  }
`;

export const ArticleDetailLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    padding: 1.6rem 2.4rem 1.7rem 2.4rem;
    background: ${theme.colors.light.white};
    border-radius: 1.6rem 1.6rem 0 0;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 1.6rem 2.4rem 1.6rem 2.4rem;
    }
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) =>
    css`
      ${theme.fonts.bold24};
      order: 2;
      color: ${theme.colors.light.black};
      text-align: left;
    `}
`;

export const Thumbnail = styled(GatsbyImage)`
  ${({ theme }) => css`
    border-radius: 0 0 1.6rem 1.6rem;
    height: 100%;
    background: ${theme.colors.light.white};
    z-index: -1;
  `}
`;

export const CreateAt = styled.time`
  ${({ theme }) =>
    css`
      ${theme.fonts.medium16};
      order: 3;
      color: ${theme.colors.light.gray200};
      text-align: left;
    `}
`;

export const TagList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    order: 1;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      gap: 1rem;
    }
  `}
`;

export const Latest = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.bold14};
    padding: 0.5rem 1.5rem;
    background: ${theme.colors.light.blue200};
    border-radius: 40px;
    color: ${theme.colors.light.white};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.regular14};
      padding: 0.5rem 1.3rem;
    }
  `}
`;

export const Tag = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.regular14};
    padding: 0.5rem 1.5rem;
    background: ${theme.colors.light.gray50};
    border-radius: 40px;
    color: ${theme.colors.light.gray300};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold14};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.regular14};
      padding: 0.5rem 1.3rem;
    }
  `}
`;
