import { ArticleType } from '../ArticlePreview/ArticlePreview';
import * as Styled from './ArticlePreviewMd..styled';

interface ArticlePreviewMdProps {
  article: ArticleType;
}

const ArticlePreviewMd = ({ article }: ArticlePreviewMdProps) => {
  const { categories, createdAt, slug, thumbnail, title } = article;

  return (
    <Styled.ArticlePreviewMd>
      <Styled.ArticleDetailLink to={slug}>
        <Styled.ContentWrapper>
          <Styled.Heading>{title}</Styled.Heading>
          <Styled.TagList>
            <Styled.Latest>최신</Styled.Latest>
            {categories.map((category) => (
              <Styled.Tag key={category}>{category}</Styled.Tag>
            ))}
          </Styled.TagList>
          <Styled.CreateAt>{createdAt}</Styled.CreateAt>
        </Styled.ContentWrapper>
        <Styled.Thumbnail image={thumbnail.gatsbyImageData} alt="" />
      </Styled.ArticleDetailLink>
    </Styled.ArticlePreviewMd>
  );
};

export default ArticlePreviewMd;
