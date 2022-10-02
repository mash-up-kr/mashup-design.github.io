import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ArticlePreviewLgWrapper = styled.article`
  position: relative;
`;

export const ArticlePreviewLgBackground = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem;
    background: #dad9e9;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndex.textBackground};
  `}
`;

export const ArticlePreviewLg = styled.article`
  ${({ theme }) => css`
    box-shadow: 0.4rem 0.4rem 2rem rgba(0, 0, 0, 0.08);
    border-radius: 1rem;
    background: ${theme.colors.light.white};
    transition: 0.3s;

    @media (hover: hover) {
      &:hover {
        transform: translate3d(-1.8rem, -1.8rem, 0);
      }
    }
  `}
`;

export const ArticleDetailLink = styled(Link)`
  ${({ theme }) =>
    css`
      display: flex;
      flex-flow: row nowrap;
      gap: 3.4rem;
      padding: 3.4rem;

      @media (max-width: ${theme.breakPoint.media.tablet}) {
        flex-flow: column nowrap;
        padding: 0;
      }
    `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    order: 2;
    padding: 5rem 0;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      order: 1;
      padding: 3.4rem 3.4rem 0;
    }
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) =>
    css`
      ${theme.fonts.bold40};
      order: 2;
      color: ${theme.colors.light.black};
    `}
`;

export const Thumbnail = styled(GatsbyImage)`
  ${({ theme }) => css`
    width: 57.2rem;
    height: 41.5rem;
    order: 1;
    background: ${theme.colors.light.white};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      width: 100%;
      height: 51.23vw;
    }
  `}
`;

export const CreateAt = styled.time`
  ${({ theme }) =>
    css`
      ${theme.fonts.medium16};
      order: 3;
      color: ${theme.colors.light.gray200};
    `}
`;

export const Description = styled.span`
  ${({ theme }) =>
    css`
      ${theme.fonts.regular20};
      order: 4;
      color: ${theme.colors.light.gray300};
    `}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  order: 1;
`;

export const Latest = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.regular14};
    padding: 0.6rem 1.6rem;
    background: ${theme.colors.light.blue200};
    border-radius: 40px;
    color: ${theme.colors.light.white};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold14};
    }
  `}
`;

export const Tag = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.regular14};
    padding: 0.6rem 1.6rem;
    background: ${theme.colors.light.gray50};
    border-radius: 40px;
    color: ${theme.colors.light.gray300};

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.bold14};
    }
  `}
`;
