import { FilterWithTag } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticlesSection.styled';

interface ArticlesSectionProps {
  allContentfulArticles: {
    nodes: ArticleType[];
  };
}

const ArticlesSection = ({ allContentfulArticles }: ArticlesSectionProps) => {
  const tagList = allContentfulArticles.nodes.map(({ tag }) => tag);
  const deDuplicatedTagList = ['전체', ...new Set(tagList)];

  return (
    <Styled.ArticlesSection>
      <FilterWithTag tagList={deDuplicatedTagList} />
    </Styled.ArticlesSection>
  );
};

export default ArticlesSection;
