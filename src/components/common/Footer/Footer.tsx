import MashUpLogo from '@/assets/svg/mashup-logo.svg';
import Behance from '@/assets/svg/behance.svg';
import Github from '@/assets/svg/github.svg';
import Tistory from '@/assets/svg/tistory.svg';
import Instagram from '@/assets/svg/instagram.svg';
import Youtube from '@/assets/svg/youtube.svg';
import * as Styled from './Footer.styled';

const platformLinks = [
  { PlatformLogo: Behance, link: 'https://www.behance.net/Mash-Up', title: 'Behance' },
  { PlatformLogo: Github, link: 'https://github.com/mash-up-kr', title: 'Github' },
  { PlatformLogo: Tistory, link: 'https://mash-up.tistory.com', title: 'Tistory' },
  {
    PlatformLogo: Instagram,
    link: 'https://www.instagram.com/official_mashup_',
    title: 'Instagram',
  },
  {
    PlatformLogo: Youtube,
    link: 'https://www.youtube.com/channel/UCgA6oOBvVdEjVfqEUEw5BnA',
    title: 'Youtube',
  },
];

const Footer = () => {
  return (
    <Styled.Footer>
      <div>
        <Styled.FlexRowAlignCenter>
          <MashUpLogo />
          <Styled.LogoTitle>Mash Up</Styled.LogoTitle>
        </Styled.FlexRowAlignCenter>
        <Styled.CopyRight>©Mash-Up.2022 All rights reserved</Styled.CopyRight>
      </div>
      <div>
        {platformLinks.map(({ PlatformLogo, link, title }) => (
          <Styled.PlatformLink
            href={link}
            target="_blank"
            rel="noreferrer"
            title={title}
            key={title}
          >
            <PlatformLogo />
          </Styled.PlatformLink>
        ))}
      </div>
    </Styled.Footer>
  );
};

export default Footer;
