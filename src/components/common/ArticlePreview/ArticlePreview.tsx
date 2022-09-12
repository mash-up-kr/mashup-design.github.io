import { ArticlePreviewLg, ArticlePreviewMd } from '@/components';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ArticleType {
  title: string;
  slug: string;
  description: string;
  categories: string[];
  thumbnail: { gatsbyImageData: IGatsbyImageData };
  createdAt: string;
}

interface ArticlePreviewProps {
  article: ArticleType;
  size: 'lg' | 'md';
}

const ArticlePreview = ({ article, size }: ArticlePreviewProps) => {
  if (!size) return null;

  if (size === 'lg') return <ArticlePreviewLg article={article} />;

  return <ArticlePreviewMd article={article} />;
};

export default ArticlePreview;
