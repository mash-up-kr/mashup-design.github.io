import { LATEST_COUNT, ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ArticlePreview } from '@/components';
import * as Styled from './ProjectList.styled';

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const distinguishedLatestProjects = projects.map((project, index) => ({
    ...project,
    isLatest: index < LATEST_COUNT,
  }));

  return (
    <Styled.ProjectList>
      {distinguishedLatestProjects.map((project) => (
        <ArticlePreview article={project} key={project.slug} />
      ))}
    </Styled.ProjectList>
  );
};

export default ProjectList;
