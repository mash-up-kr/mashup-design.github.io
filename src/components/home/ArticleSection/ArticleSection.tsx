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
  return (
    <Styled.ArticleSection>
      {viewportSize !== 'mobile' && <ArticlePreviewLg article={allContentfulArticles.nodes[0]} />}
      <ArticlePreview article={allContentfulArticles.nodes[0]} />
      <ArticlePreview article={allContentfulArticles.nodes[1]} />
    </Styled.ArticleSection>
  );
};

export default ArticleSection;
