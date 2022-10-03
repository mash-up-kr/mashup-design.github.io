import { ArticlePreview, ArticlePreviewLg } from '@/components';
import { useDetectViewport } from '@/hooks';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticleSection.styled';

interface ArticleSectionProps {
  allContentfulArticles: {
    nodes: ArticleType[];
  };
}

const ArticleSection = ({ allContentfulArticles }: ArticleSectionProps) => {
  const { viewportSize } = useDetectViewport();

  const SHOW_ARTICLE_COUNT = viewportSize === 'mobile' ? 2 : 3;

  const slicedArticles = allContentfulArticles.nodes.slice(0, SHOW_ARTICLE_COUNT);
  return (
    <Styled.ArticleSection>
      {slicedArticles.map((article, index) =>
        index === 0 && viewportSize !== 'mobile' ? (
          <ArticlePreviewLg article={article} key={article.slug} />
        ) : (
          <ArticlePreview article={article} key={article.slug} />
        ),
      )}
    </Styled.ArticleSection>
  );
};

export default ArticleSection;
