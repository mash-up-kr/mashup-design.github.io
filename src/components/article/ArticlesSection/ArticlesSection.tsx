import { FilterWithTag, ArticleList } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticlesSection.styled';

interface ArticlesSectionProps {
  articles: ArticleType[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  const tagList = articles.map(({ tag }) => tag);
  const deDuplicatedTagList = ['전체', ...new Set(tagList)];

  return (
    <Styled.ArticlesSection>
      <FilterWithTag tagList={deDuplicatedTagList} />
      <ArticleList articles={articles} />
    </Styled.ArticlesSection>
  );
};

export default ArticlesSection;
