import MashUpLogo from '@/assets/svg/mashup-logo.svg';
import { ROUTES } from '@/constants/route';
import { useState } from 'react';
import CloseButton from '@/assets/svg/x-icon.svg';
import { LinkMenuList, LinkMenuListMobile } from '@/components';
import * as Styled from './GlobalNavigationBar.styled';

const GlobalNavigationBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleToggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevHamburgerMenuState) => !prevHamburgerMenuState);
  };

  return (
    <Styled.GlobalNavigationBar>
      <Styled.Heading to={ROUTES.HOME}>
        <MashUpLogo />
        <Styled.HeadingText>Mash Up Design</Styled.HeadingText>
        <Styled.MashUpPd />
      </Styled.Heading>

      <LinkMenuList />
      {isHamburgerMenuOpen && <LinkMenuListMobile />}

      <Styled.HamburgerMenuToggleButton onClick={handleToggleHamburgerMenu}>
        {isHamburgerMenuOpen ? (
          <CloseButton />
        ) : (
          <Styled.Hamburger>
            <div />
            <div />
            <div />
          </Styled.Hamburger>
        )}
      </Styled.HamburgerMenuToggleButton>
    </Styled.GlobalNavigationBar>
  );
};

export default GlobalNavigationBar;
