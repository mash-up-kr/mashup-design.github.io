import * as Styled from './PromotionSection.styled';

const PromotionSection = () => {
  return (
    <Styled.Background>
      <Styled.PromotionSection>
        <Styled.MainTextSection>
          <Styled.TextUnderLine />
          <Styled.MainText>Come and</Styled.MainText>
          <Styled.MainText>think, create</Styled.MainText>
          <Styled.MainText>design and</Styled.MainText>
          <Styled.MainText>mash up together!</Styled.MainText>
          <Styled.DrawingLine />
          <Styled.FourWayArrow />
          <Styled.SpeechBubble />
          <Styled.TIcon />
          <Styled.MouseCursor />
          <Styled.HighlighterYellow />
          <Styled.HighlighterRed />
        </Styled.MainTextSection>
        <Styled.Description>
          {
            '매시업 프로덕트 디자인팀과 함께 해주세요!\n매 기수 모집일정은 홈페이지/인스타그램에 공지됩니다.'
          }
        </Styled.Description>
        <Styled.OfficialMashUpPageLink href="https://mash-up.kr" target="_blank" rel="noreferrer">
          매시업 홈페이지 구경하자
        </Styled.OfficialMashUpPageLink>
      </Styled.PromotionSection>
    </Styled.Background>
  );
};

export default PromotionSection;
