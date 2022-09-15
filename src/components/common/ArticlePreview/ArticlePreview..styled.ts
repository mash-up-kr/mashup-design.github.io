import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ArticlePreview = styled.article`
  box-shadow: 0rem 0.4rem 1.2rem rgba(46, 44, 44, 0.25);
  border-radius: 1.6rem;
`;

export const ArticleDetailLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  max-height: 100%;
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    padding: 1.6rem 2.4rem 1.7rem 2.4rem;

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
  border-radius: 0 0 1.6rem 1.6rem;
  flex-basis: 100vh;
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
