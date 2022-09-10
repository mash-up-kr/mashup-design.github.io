import { ArticlePreview } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticleSection.styled';

interface ArticleSectionProps {
  allContentfulArticles: {
    nodes: ArticleType[];
  };
}

const ArticleSection = ({ allContentfulArticles }: ArticleSectionProps) => {
  return (
    <Styled.ArticleSection>
      <ArticlePreview article={allContentfulArticles.nodes[0]} />
    </Styled.ArticleSection>
  );
};

export default ArticleSection;
