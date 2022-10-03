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
      display: none;
    }
  `}
`;

export const Menu = styled.li`
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
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

    @media (hover: hover) {
      :hover {
        color: ${hover_color};
      }
    }

    :active {
      border-bottom: 0.8rem solid ${active_border_color};
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

    @media (hover: hover) {
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
