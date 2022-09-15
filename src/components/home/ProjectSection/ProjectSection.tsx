import { ArticlePreview } from '@/components/common';
import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { ROUTES } from '@/constants/route';
import * as Styled from './ProjectSection.styled';

interface ProjectSectionProps {
  allContentfulProject: { nodes: ProjectType[] };
}

const ProjectSection = ({ allContentfulProject }: ProjectSectionProps) => {
  const { nodes } = allContentfulProject;
  return (
    <Styled.ProjectSection>
      <Styled.Heading>Featured project</Styled.Heading>
      <Styled.ProjectList>
        <ArticlePreview article={nodes[0]} />
        <ArticlePreview article={nodes[0]} />
        <ArticlePreview article={nodes[0]} />
        <ArticlePreview article={nodes[0]} />
        <ArticlePreview article={nodes[0]} />
        <ArticlePreview article={nodes[0]} />
      </Styled.ProjectList>
      <Styled.MoreProjectLink to={ROUTES.PROJECTS}>더 많은 프로젝트 보기</Styled.MoreProjectLink>
    </Styled.ProjectSection>
  );
};

export default ProjectSection;
