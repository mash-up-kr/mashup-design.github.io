import { ArticleType, LATEST_COUNT } from '@/components/common/ArticlePreview/ArticlePreview';
import { ArticlePreview } from '@/components';
import * as Styled from './ArticleList.styled';

export const INITIAL_FILTER_BY_TAG = '전체';

interface ArticleListProps {
  articles: ArticleType[];
  currentFilterByTag: string;
}

const ArticleList = ({ articles, currentFilterByTag }: ArticleListProps) => {
  const distinguishedLatestArticles = articles.map((article, index) => ({
    ...article,
    isLatest: index < LATEST_COUNT,
  }));

  const filteredArticles =
    currentFilterByTag === INITIAL_FILTER_BY_TAG
      ? distinguishedLatestArticles
      : distinguishedLatestArticles.filter(({ tag }) => tag === currentFilterByTag);

  return (
    <Styled.ArticleList>
      {filteredArticles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </Styled.ArticleList>
  );
};

export default ArticleList;
