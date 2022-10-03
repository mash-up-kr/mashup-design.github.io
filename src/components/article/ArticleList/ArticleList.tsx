import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ArticlePreview } from '@/components';
import * as Styled from './ArticleList.styled';

export const INITIAL_FILTER_BY_TAG = '전체';

interface ArticleListProps {
  articles: ArticleType[];
  currentFilterByTag: string;
}

const ArticleList = ({ articles, currentFilterByTag }: ArticleListProps) => {
  const filteredArticles =
    currentFilterByTag === INITIAL_FILTER_BY_TAG
      ? articles
      : articles.filter(({ tag }) => tag === currentFilterByTag);

  return (
    <Styled.ArticleList>
      {filteredArticles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </Styled.ArticleList>
  );
};

export default ArticleList;
