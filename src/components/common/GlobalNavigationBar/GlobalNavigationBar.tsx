import MashUpLogo from '@/assets/svg/mashup-logo.svg';
import { ROUTES } from '@/constants/route';
import { useEffect, useState } from 'react';
import CloseButton from '@/assets/svg/x-icon.svg';
import { useDetectViewport } from '@/hooks';
import { LinkMenuList } from '@/components';
import * as Styled from './GlobalNavigationBar.styled';

const GlobalNavigationBar = () => {
  const { viewportSize } = useDetectViewport();
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(viewportSize !== 'mobile');

  const handleToggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevHamburgerMenuState) => !prevHamburgerMenuState);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(viewportSize !== 'mobile');
  }, [viewportSize]);

  return (
    <Styled.GlobalNavigationBar>
      <Styled.Heading to={ROUTES.HOME}>
        <MashUpLogo />
        <Styled.HeadingText>Mash Up Design</Styled.HeadingText>
        <Styled.MashUpPd />
      </Styled.Heading>

      {isHamburgerMenuOpen && <LinkMenuList />}

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
