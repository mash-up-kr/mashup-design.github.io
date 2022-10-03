import { FilterWithTag, ArticleList } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { useState } from 'react';
import { INITIAL_FILTER_BY_TAG } from '@/components/article/ArticleList/ArticleList';
import * as Styled from './ArticlesSection.styled';

interface ArticlesSectionProps {
  articles: ArticleType[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  const tagList = articles.map(({ tag }) => tag);
  const deDuplicatedTagList = [...new Set([INITIAL_FILTER_BY_TAG, ...tagList])];

  const [currentFilterByTag, setCurrentFilterByTag] = useState(INITIAL_FILTER_BY_TAG);

  return (
    <Styled.ArticlesSection>
      <FilterWithTag
        tagList={deDuplicatedTagList}
        currentFilterByTag={currentFilterByTag}
        setCurrentFilterByTag={setCurrentFilterByTag}
      />
      <ArticleList articles={articles} currentFilterByTag={currentFilterByTag} />
    </Styled.ArticlesSection>
  );
};

export default ArticlesSection;
