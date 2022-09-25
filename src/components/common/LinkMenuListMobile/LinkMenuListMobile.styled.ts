/* eslint-disable camelcase */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ArrowUpSideSvg from '@/assets/svg/arrow-upside.svg';

export const LinkMenuList = styled.ul`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: absolute;
      top: 6.4rem;
      left: 0;
      display: flex;
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
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold20};
      padding: 0.8rem;
      padding-bottom: 0;
      color: ${theme.colors.light.gray400};

      :hover {
        color: ${hover_color};
      }
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
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold20};
      padding: 0.8rem;
      padding-bottom: 0;
      color: ${theme.colors.light.gray400};
      cursor: pointer;

      :hover {
        color: ${hoverColor};

        & > svg > path {
          fill: ${hoverColor};
        }
      }
    }
  `}
`;

export const ArrowUpSide = styled(ArrowUpSideSvg)`
  margin-left: 0.2rem;
`;
