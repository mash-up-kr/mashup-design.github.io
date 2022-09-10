/* eslint-disable camelcase */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ArrowUpSideSvg from '@/assets/svg/arrow-upside.svg';

export const LinkMenuList = styled.ul`
  ${({ theme }) => css`
    position: static;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: absolute;
      top: 6.4rem;
      left: 0;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: ${theme.colors.light.white};
    }
  `}
`;

export const Menu = styled.li`
  ${({ theme }) => css`
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-top: 4.8rem;
      margin-right: 0;

      :first-of-type {
        margin-top: 0;
      }
    }
  `}
`;

interface MenuLinkProps {
  hover_color: string;
  active_border_color: string;
}

export const MenuLink = styled(Link)<MenuLinkProps>`
  ${({ theme, active_border_color, hover_color }) => css`
    ${theme.fonts.bold14};
    padding: 0.8rem;
    color: ${theme.colors.light.gray400};
    padding-bottom: 0;

    :hover {
      color: ${hover_color};
    }

    :active {
      border-bottom: 0.8rem solid ${active_border_color};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold20};
      :active {
        border-bottom: 1rem solid ${active_border_color};
      }
    }
  `}
`;

interface JoinUsProps {
  hoverColor: string;
}

export const JoinUs = styled.a<JoinUsProps>`
  ${({ theme, hoverColor }) => css`
    ${theme.fonts.bold14};
    padding: 0.8rem;
    color: ${theme.colors.light.gray400};
    cursor: pointer;

    :hover {
      color: ${hoverColor};

      & > svg > path {
        fill: ${hoverColor};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold20};
      padding-bottom: 0;
    }
  `}
`;

export const ArrowUpSide = styled(ArrowUpSideSvg)`
  margin-left: 0.2rem;
`;
