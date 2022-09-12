import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './ArticlePreview..styled';

export interface ArticleType {
  title: string;
  slug: string;
  description: string;
  categories: string[];
  thumbnail: { gatsbyImageData: IGatsbyImageData };
  createdAt: string;
}

interface ArticlePreviewMdProps {
  article: ArticleType;
}

const ArticlePreview = ({ article }: ArticlePreviewMdProps) => {
  const { categories, createdAt, slug, thumbnail, title } = article;

  return (
    <Styled.ArticlePreview>
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
    </Styled.ArticlePreview>
  );
};

export default ArticlePreview;
