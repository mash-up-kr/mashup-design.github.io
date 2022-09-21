import * as Styled from './SubHeader.styled';

export type HighlightColor = 'yellow' | 'blue' | 'red';
interface HeaderProps {
  title: string;
  description: string;
  color: HighlightColor;
}

const { highlighters } = Styled;

const SubHeader = ({ title, description, color }: HeaderProps) => {
  const Highlighter = highlighters[color];
  return (
    <Styled.Header>
      <Styled.HeadingSection>
        <Styled.FlexBox>
          <Styled.Star color={color} />
          <Styled.Heading>
            <Styled.Underline color={color} />
            <span>{title}</span>
          </Styled.Heading>
        </Styled.FlexBox>
        <Highlighter />
      </Styled.HeadingSection>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Header>
  );
};

export default SubHeader;
