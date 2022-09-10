import { ArticlePreviewLg } from '@/components';
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
}

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  return <ArticlePreviewLg article={article} />;
};

export default ArticlePreview;
