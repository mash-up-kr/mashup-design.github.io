import { Layout, ProjectsSection, SubHeader } from '@/components';
import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { graphql } from 'gatsby';

interface ProjectsPageProps {
  data: {
    allContentfulProject: {
      nodes: ProjectType[];
    };
  };
}

const ProjectsPage = ({ data }: ProjectsPageProps) => {
  const projects = data.allContentfulProject.nodes;
  return (
    <Layout>
      <SubHeader color="yellow" title="Projects" description="매시업 디자인팀의 프로젝트 이야기" />
      <ProjectsSection projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query getProjectPageData {
    allContentfulProject(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
        tag
        thumbnail {
          gatsbyImageData
        }
        createdAt(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
