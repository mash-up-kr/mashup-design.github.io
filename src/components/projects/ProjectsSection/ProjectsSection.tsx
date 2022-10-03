import { ProjectList } from '@/components';
import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ProjectsSection.styled';

interface ProjectsSectionProps {
  projects: ProjectType[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Styled.ProjectsSection>
      <ProjectList projects={projects} />
    </Styled.ProjectsSection>
  );
};

export default ProjectsSection;
