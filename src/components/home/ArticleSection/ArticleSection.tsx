import { ArticlePreview } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { useDetectViewport } from '@/hooks';
import * as Styled from './ArticleSection.styled';

interface ArticleSectionProps {
  allContentfulArticles: {
    nodes: ArticleType[];
  };
}

const ArticleSection = ({ allContentfulArticles }: ArticleSectionProps) => {
  const { viewportSize } = useDetectViewport();
  return (
    <Styled.ArticleSection>
      {viewportSize !== 'mobile' && (
        <ArticlePreview article={allContentfulArticles.nodes[0]} size="lg" />
      )}
      <ArticlePreview article={allContentfulArticles.nodes[0]} size="md" />
      <ArticlePreview article={allContentfulArticles.nodes[1]} size="md" />
    </Styled.ArticleSection>
  );
};

export default ArticleSection;
