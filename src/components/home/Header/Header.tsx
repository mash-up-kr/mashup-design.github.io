import ArrowUpside from '@/assets/svg/arrow-upside.svg';
import * as Styled from './Header.styled';

const externalLinkList = [
  { title: 'Behance', link: 'https://www.behance.net/Mash-Up' },
  { title: 'Instagram', link: 'https://www.instagram.com/official_mashup_' },
  { title: 'Mail', link: 'mailto:recruit.mashup@gmail.com' },
];

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeadingWrapper>
        <Styled.Highlighter />
        <Styled.Star />
        <Styled.Shovel />
        <Styled.ShovelNoShadow />
        <Styled.HeadingText>Mash-Up</Styled.HeadingText>
        <Styled.HeadingText>designs</Styled.HeadingText>
        <Styled.HeadingText>the highlights.</Styled.HeadingText>
      </Styled.HeadingWrapper>
      <Styled.FlexBox>
        <Styled.Description>{'IT개발동아리 매쉬업 \n프로덕트 디자인팀 블로그'}</Styled.Description>
        <ul>
          {externalLinkList.map(({ title, link }) => (
            <Styled.ExternalLinkItem key={title}>
              <Styled.ExternalLink href={link} target="_blank" rel="noreferrer">
                {title}
                <ArrowUpside />
                <Styled.HoverUnderline />
              </Styled.ExternalLink>
            </Styled.ExternalLinkItem>
          ))}
        </ul>
      </Styled.FlexBox>
    </Styled.Header>
  );
};

export default Header;
