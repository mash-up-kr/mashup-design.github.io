import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashUpPdSvg from '@/assets/svg/mashup-pd.svg';
import { Link } from 'gatsby';

interface GlobalNavigationBarProps {
  isScrollTop: boolean;
  isHamburgerMenuOpen: boolean;
}

export const GlobalNavigationBar = styled.nav<GlobalNavigationBarProps>`
  ${({ theme, isScrollTop, isHamburgerMenuOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.2s;
    background: ${!isHamburgerMenuOpen && isScrollTop ? 'transparent' : theme.colors.light.white};
    z-index: ${theme.zIndex.gnb};
  `}
`;

export const GlobalNavigationBarInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2.4rem;
    max-width: 120rem;
    height: 8rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 6.4rem;
    }
  `}
`;

interface HeadingProps {
  isScrollTop: boolean;
}

export const Heading = styled(Link)<HeadingProps>`
  ${({ isScrollTop }) => css`
    display: flex;
    align-items: center;
    transition: 0.2s;
    opacity: ${isScrollTop ? 0 : 1};
  `}
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

export const HamburgerMenuToggleButton = styled.button`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: block;
      padding: 0;
      border: 0;
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
