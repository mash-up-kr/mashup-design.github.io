import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const ProjectSection = styled.section`
  margin: 8rem auto 0;
  padding: 0 2.4rem 11.4rem;
  max-width: 120rem;
  text-align: center;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.bold32};
    margin-bottom: 6rem;
  `}
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 36.4rem);
  grid-template-rows: repeat(2, 43rem);
  column-gap: 3rem;
  row-gap: 5.7rem;
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
  `}
`;
