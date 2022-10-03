import { ProjectContentSection, CommentWidget } from '@/components';
import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import * as Styled from './ProjectTemplateLayout.styled';

interface AProjectTemplateLayoutProps {
  project: ProjectType;
}

const ProjectTemplateLayout = ({ project }: AProjectTemplateLayoutProps) => {
  return (
    <Styled.ProjectTemplateLayout>
      <ProjectContentSection contentImages={project.contentImages} />
      <CommentWidget />
    </Styled.ProjectTemplateLayout>
  );
};

export default ProjectTemplateLayout;
