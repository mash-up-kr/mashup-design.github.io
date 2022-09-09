import { colors } from '@/styles/themes/colors';
import MashUpLogo from '@/assets/svg/mashup-logo.svg';
import { ROUTES } from '@/constants/route';
import * as Styled from './GlobalNavigationBar.styled';

const linkMenuList = [
  {
    title: 'Article',
    link: ROUTES.ARTICLE,
    hoverColor: colors.light.blue300,
    activeBorderColor: colors.light.blue100,
    target: '_self',
    rel: 'alternate',
  },
  {
    title: 'Projects',
    link: ROUTES.PROJECTS,
    hoverColor: colors.light.yellow300,
    activeBorderColor: colors.light.yellow100,
    target: '_self',
    rel: 'alternate',
  },
  {
    title: 'About',
    link: ROUTES.ABOUT,
    hoverColor: colors.light.red300,
    activeBorderColor: colors.light.red100,
    target: '_self',
    rel: 'alternate',
  },
  {
    title: 'Join us',
    link: 'https:recruit.mash-up.kr',
    hoverColor: colors.light.blue300,
    activeBorderColor: colors.light.blue100,
    target: '_blank',
    rel: 'noreferrer',
  },
];

const GlobalNavigationBar = () => {
  return (
    <Styled.GlobalNavigationBar>
      <Styled.Heading to={ROUTES.HOME}>
        <MashUpLogo />
        <Styled.HeadingText>Mash Up Design</Styled.HeadingText>
        <Styled.MashUpPd />
      </Styled.Heading>

      <Styled.LinkMenuList>
        {linkMenuList.map(({ activeBorderColor, hoverColor, link, rel, target, title }) => (
          <Styled.Menu>
            <Styled.MenuLink
              to={link}
              hoverColor={hoverColor}
              activeBorderColor={activeBorderColor}
              target={target}
              rel={rel}
            >
              {title}
            </Styled.MenuLink>
          </Styled.Menu>
        ))}
      </Styled.LinkMenuList>
      <Styled.HamburgerMenu>
        <div />
        <div />
        <div />
      </Styled.HamburgerMenu>
    </Styled.GlobalNavigationBar>
  );
};

export default GlobalNavigationBar;
