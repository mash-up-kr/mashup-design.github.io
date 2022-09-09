import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashUpPdSvg from '@/assets/svg/mashup-pd.svg';
import { Link } from 'gatsby';

interface GlobalNavigationBarProps {
  isHamburgerMenuOpen: boolean;
}

export const GlobalNavigationBar = styled.nav<GlobalNavigationBarProps>`
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
  ${({ theme }) => css`
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
      margin-top: 4rem;
      margin-right: 0;

      :first-of-type {
        margin-top: 0;
      }
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
      // TODO: border 위치 디자인 시안과 일치
      border-bottom: 0.8rem solid ${activeBorderColor};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.bold20};
    }
  `}
`;

export const HamburgerMenuToggleButton = styled.button`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: block;
      background: transparent;
      cursor: pointer;
    }
  `}
`;

export const Hamburger = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 0.6rem 0.5rem;

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
  `}
`;
