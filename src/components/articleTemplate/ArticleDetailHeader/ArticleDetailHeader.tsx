import * as Styled from './ArticleDetailHeader.styled';

const ArticleDetailHeader = () => {
  return (
    <Styled.ArticleDetailHeader>
      <Styled.Tag>디자인 스터디</Styled.Tag>
      <Styled.Heading>
        웹 디자인 스터디 이야기 - 프레이머는 어떻게 사용해야할까?
        <Styled.Highlights />
        <Styled.LeftStar />
        <Styled.RightStar />
      </Styled.Heading>
      <Styled.CreateAt>2022. 08. 05</Styled.CreateAt>
    </Styled.ArticleDetailHeader>
  );
};

export default ArticleDetailHeader;
