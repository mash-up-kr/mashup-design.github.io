import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ProjectContentSectionProps {
  contentImages: ProjectType['contentImages'];
}

const ProjectContentSection = ({ contentImages }: ProjectContentSectionProps) => {
  return (
    <ul>
      {contentImages.map(({ gatsbyImageData }) => (
        <GatsbyImage image={gatsbyImageData} alt="" />
      ))}
    </ul>
  );
};

export default ProjectContentSection;
