import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const ProjectSection = styled.section`
  ${({ theme }) => css`
    margin: 8rem auto 0;
    padding: 0 2.4rem 11.4rem;
    max-width: 120rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding-bottom: 5.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-bottom: 4.8rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.bold32};
    margin-bottom: 6rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      margin-bottom: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-bottom: 4.8rem;
    }
  `}
`;

export const ProjectList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 43rem);
    column-gap: 3rem;
    row-gap: 5.7rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, 53.09vw);
      column-gap: 3.4rem;
      row-gap: 2.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      grid-template-columns: 100%;
      grid-template-rows: repeat(3, 119.44vw);
      column-gap: 0;
      row-gap: 2.4rem;
    }
  `}
`;

export const MoreProjectLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.fonts.regular20};
    display: inline-block;
    margin-top: 8.2rem;
    padding: 2.8rem 9.85rem;
    background: ${theme.colors.light.black};
    color: ${theme.colors.light.white};
    border-radius: 0.8rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      margin-top: 5.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium16};
      margin-top: 4.8rem;
      padding: 1.4rem 8.75rem;
    }
  `}
`;
