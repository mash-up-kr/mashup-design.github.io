import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticleDetailHeader.styled';

interface ArticleDetailHeaderProps {
  article: ArticleType;
}

const ArticleDetailHeader = ({ article }: ArticleDetailHeaderProps) => {
  const { createdAt, tag, title } = article;
  return (
    <Styled.ArticleDetailHeader>
      <Styled.Tag>{tag}</Styled.Tag>
      <Styled.Heading>
        {title}
        <Styled.Highlights />
        <Styled.LeftStar />
        <Styled.RightStar />
      </Styled.Heading>
      <Styled.CreateAt>{createdAt}</Styled.CreateAt>
    </Styled.ArticleDetailHeader>
  );
};

export default ArticleDetailHeader;
