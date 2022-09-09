import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashUpPdSvg from '@/assets/svg/mashup-pd.svg';
import { Link } from 'gatsby';

export const GlobalNavigationBar = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
    height: 8rem;
    width: 100%;
    max-width: 120rem;
    z-index: ${theme.zIndex.gnb};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 6.4rem;
    }
  `}
`;

export const Heading = styled(Link)`
  display: flex;
  align-items: center;
`;

export const MashUpPd = styled(MashUpPdSvg)`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: inline-block;
      margin-left: 0.4rem;
    }
  `}
`;

export const HeadingText = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.bold14};
    display: inline-block;
    margin-left: 0.9rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.a11y.visuallyHidden};
    }
  `}
`;

export const LinkMenuList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

export const Menu = styled.li`
  ${({ theme }) => css`
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: none;
    }
  `}
`;

interface MenuLinkProps {
  hoverColor: string;
  activeBorderColor: string;
}

export const MenuLink = styled(Link)<MenuLinkProps>`
  ${({ theme, activeBorderColor, hoverColor }) => css`
    ${theme.fonts.bold14};
    padding: 0.8rem;
    color: ${theme.colors.light.gray400};

    :hover {
      color: ${hoverColor};
    }

    :active {
      border-bottom: 0.8rem solid ${activeBorderColor};
    }
  `}
`;

export const HamburgerMenu = styled.button`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 0.6rem 0.5rem;
      background: transparent;

      & div {
        width: 1.4rem;
        height: 0.2rem;
        border-radius: 0.2rem;
        background: ${theme.colors.light.black};

        :nth-of-type(2) {
          margin: 0.3rem 0;
          width: 1.2rem;
        }
      }
    }
  `}
`;
