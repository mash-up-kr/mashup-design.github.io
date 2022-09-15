import * as Styled from './SubHeader.styled';

interface HeaderProps {
  title: string;
  description: string;
}

const SubHeader = ({ title, description }: HeaderProps) => {
  return (
    <Styled.Header>
      <Styled.HeadingSection>
        <Styled.FlexBox>
          <Styled.Star />
          <Styled.Heading>
            {title}
            <Styled.Underline />
          </Styled.Heading>
        </Styled.FlexBox>
        <Styled.Highlighter />
      </Styled.HeadingSection>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Header>
  );
};

export default SubHeader;
