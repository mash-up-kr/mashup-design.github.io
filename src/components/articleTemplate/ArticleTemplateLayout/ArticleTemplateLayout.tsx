import { ArticleDetailHeader, ArticleContentSection } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ArticleTemplateLayout.styled';

interface ArticleTemplateLayoutProps {
  article: ArticleType;
}

const ArticleTemplateLayout = ({ article }: ArticleTemplateLayoutProps) => {
  return (
    <Styled.ArticleTemplateLayout>
      <ArticleDetailHeader article={article} />
      <ArticleContentSection contentImages={article.contentImages} />
    </Styled.ArticleTemplateLayout>
  );
};

export default ArticleTemplateLayout;
