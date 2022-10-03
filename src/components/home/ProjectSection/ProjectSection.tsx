import { ArticlePreview } from '@/components/common';
import { LATEST_COUNT, ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ROUTES } from '@/constants/route';
import { ViewPort } from '@/constants/viewport';
import { useDetectViewport } from '@/hooks';
import * as Styled from './ProjectSection.styled';

const getNumberOfProjectsPerViewport = (viewportSize: ViewPort) => {
  if (viewportSize === 'tablet') return 4;
  if (viewportSize === 'mobile') return 3;
  return 6;
};

interface ProjectSectionProps {
  allContentfulProject: { nodes: ProjectType[] };
}

const ProjectSection = ({ allContentfulProject }: ProjectSectionProps) => {
  const { nodes } = allContentfulProject;

  const { viewportSize } = useDetectViewport();

  const numberOfProjects = getNumberOfProjectsPerViewport(viewportSize);
  const projectList = nodes.slice(0, numberOfProjects);

  const distinguishedLatestProjects = projectList.map((article, index) => ({
    ...article,
    isLatest: index < LATEST_COUNT,
  }));

  return (
    <Styled.ProjectSection>
      <Styled.Heading>Featured project</Styled.Heading>
      <Styled.ProjectList>
        {distinguishedLatestProjects.map((project) => (
          <ArticlePreview article={project} key={project.slug} />
        ))}
      </Styled.ProjectList>
      <Styled.MoreProjectLink to={ROUTES.PROJECTS}>더 많은 프로젝트 보기</Styled.MoreProjectLink>
    </Styled.ProjectSection>
  );
};

export default ProjectSection;
