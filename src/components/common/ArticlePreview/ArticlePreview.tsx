import { ROUTES } from '@/constants/route';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as Styled from './ArticlePreview..styled';

export const LATEST_COUNT = 3;

export interface IsLatestType {
  isLatest: boolean;
}

export interface ArticleType {
  title: string;
  slug: string;
  description: string;
  tag: string;
  thumbnail: { gatsbyImageData: IGatsbyImageData };
  createdAt: string;
  contentImages: Array<{ gatsbyImageData: IGatsbyImageData }>;
}

export interface ProjectType {
  title: string;
  slug: string;
  description: never;
  tag: string;
  thumbnail: { gatsbyImageData: IGatsbyImageData };
  createdAt: string;
}

interface ArticlePreviewMdProps {
  article: (ArticleType & IsLatestType) | (ProjectType & IsLatestType);
}

const ArticlePreview = ({ article }: ArticlePreviewMdProps) => {
  const { tag, createdAt, slug, thumbnail, title, description, isLatest } = article;

  const linkPrefix = !description ? ROUTES.PROJECTS : ROUTES.ARTICLE;

  return (
    <Styled.ArticlePreviewWrapper>
      <Styled.ArticlePreview>
        <Styled.ArticleDetailLink to={`${linkPrefix}/${slug}`}>
          <Styled.ContentWrapper>
            <Styled.Heading>{title}</Styled.Heading>
            <Styled.TagList>
              {isLatest && <Styled.Latest>최신</Styled.Latest>}
              <Styled.Tag>{tag}</Styled.Tag>
            </Styled.TagList>
            <Styled.CreateAt>{createdAt}</Styled.CreateAt>
          </Styled.ContentWrapper>
          <Styled.Thumbnail image={thumbnail.gatsbyImageData} alt="" />
        </Styled.ArticleDetailLink>
      </Styled.ArticlePreview>
      <Styled.ArticlePreviewBackground />
    </Styled.ArticlePreviewWrapper>
  );
};

export default ArticlePreview;
