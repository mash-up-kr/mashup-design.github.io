import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ArticlePreview } from '@/components';
import * as Styled from './ArticleList.styled';

interface ArticleListProps {
  articles: ArticleType[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Styled.ArticleList>
      {articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </Styled.ArticleList>
  );
};

export default ArticleList;
