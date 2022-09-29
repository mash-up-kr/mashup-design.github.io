import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ArticleContentProps {
  contentImages: ArticleType['contentImages'];
}

const ArticleContentSection = ({ contentImages }: ArticleContentProps) => {
  return (
    <ul>
      {contentImages.map(({ gatsbyImageData }) => (
        <GatsbyImage image={gatsbyImageData} alt="" />
      ))}
    </ul>
  );
};

export default ArticleContentSection;
