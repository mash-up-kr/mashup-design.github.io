import { ROUTES } from '@/constants/route';
import { colors } from '@/styles/themes/colors';
import * as Styled from './LinkMenuListMobile.styled';

const linkMenuList = [
  {
    title: 'Article',
    link: ROUTES.ARTICLE,
    hoverColor: colors.light.blue300,
    activeBorderColor: colors.light.blue100,
  },
  {
    title: 'Projects',
    link: ROUTES.PROJECTS,
    hoverColor: colors.light.yellow300,
    activeBorderColor: colors.light.yellow100,
  },
  {
    title: 'About',
    link: ROUTES.ABOUT,
    hoverColor: colors.light.red300,
    activeBorderColor: colors.light.red100,
  },
];

const LinkMenuListMobile = () => {
  return (
    <Styled.LinkMenuList>
      {linkMenuList.map(({ activeBorderColor, hoverColor, link, title }) => (
        <Styled.Menu key={title}>
          <Styled.MenuLink
            to={link}
            hover_color={hoverColor}
            active_border_color={activeBorderColor}
          >
            {title}
          </Styled.MenuLink>
        </Styled.Menu>
      ))}
      <Styled.Menu>
        <Styled.JoinUs
          href="https://recruit.mash-up.kr"
          target="_blank"
          rel="noreferrer"
          hoverColor={colors.light.blue300}
        >
          Join us
          <Styled.ArrowUpSide />
        </Styled.JoinUs>
      </Styled.Menu>
    </Styled.LinkMenuList>
  );
};

export default LinkMenuListMobile;
