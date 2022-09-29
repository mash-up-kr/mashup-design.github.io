import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ROUTES } from '@/constants/route';
import * as Styled from './ArticlePreviewLg.styled';

interface ArticlePreviewLgProps {
  article: ArticleType;
}

const ArticlePreviewLg = ({ article }: ArticlePreviewLgProps) => {
  const { tag, createdAt, description, slug, thumbnail, title } = article;

  return (
    <Styled.ArticlePreviewLg>
      <Styled.ArticleDetailLink to={`${ROUTES.ARTICLE}/${slug}`}>
        <Styled.ContentWrapper>
          <Styled.Heading>{title}</Styled.Heading>
          <Styled.TagList>
            <Styled.Latest>최신</Styled.Latest>
            <Styled.Tag>{tag}</Styled.Tag>
          </Styled.TagList>
          <Styled.Description>{description}</Styled.Description>
          <Styled.CreateAt>{createdAt}</Styled.CreateAt>
        </Styled.ContentWrapper>
        <Styled.Thumbnail image={thumbnail.gatsbyImageData} alt="" />
      </Styled.ArticleDetailLink>
    </Styled.ArticlePreviewLg>
  );
};

export default ArticlePreviewLg;
