import { colors } from '@/styles/themes/colors';
import * as Styled from './WhatWeDo.styled';

const WhatWeDo = () => {
  return (
    <Styled.WhatWeDoSection>
      <Styled.Heading>What we do</Styled.Heading>
      <Styled.Background>
        <Styled.WhatWeDoCardSection>
          매시업 디자인팀에서는 세미나, 스터디 팀 프로젝트까지 다양한 디자인 경험을 할 수 있습니다.
          매 기수마다 선호도 조사를 통해 세미나 및 스터디 주제를 팀원들이 선정해서 꾸려나가고
          있습니다.
          <Styled.CardList>
            <Styled.WhatWeDoCard background={colors.light.blue200} color={colors.light.white}>
              <Styled.CardHeading>세미나/스터디</Styled.CardHeading>
              <Styled.CardDescription>디자인 관련 스터디입니다.</Styled.CardDescription>
            </Styled.WhatWeDoCard>
            <Styled.WhatWeDoCard background={colors.light.yellow200} color={colors.light.black}>
              <Styled.CardHeading>팀 프로젝트</Styled.CardHeading>
              <Styled.CardDescription>매시업의 메인 활동입니다.</Styled.CardDescription>
            </Styled.WhatWeDoCard>
            <Styled.WhatWeDoCard background={colors.light.red200} color={colors.light.white}>
              <Styled.CardHeading>장기 프로젝트</Styled.CardHeading>
              <Styled.CardDescription>포트폴리오 제작 활동입니다.</Styled.CardDescription>
            </Styled.WhatWeDoCard>
          </Styled.CardList>
        </Styled.WhatWeDoCardSection>
      </Styled.Background>
    </Styled.WhatWeDoSection>
  );
};

export default WhatWeDo;
