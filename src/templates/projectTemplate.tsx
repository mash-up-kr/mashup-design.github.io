import { Layout, ProjectTemplateLayout } from '@/components';
import { ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';
import { graphql } from 'gatsby';

interface ProjectTemplateProps {
  data: {
    contentfulProject: ProjectType;
  };
}

const ArticleTemplate = ({ data }: ProjectTemplateProps) => {
  const { contentfulProject } = data;

  return (
    <Layout>
      <ProjectTemplateLayout project={contentfulProject} />
    </Layout>
  );
};

export default ArticleTemplate;

export const queryMarkdownDataBySlug = graphql`
  query getProjectDetail($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      tag
      thumbnail {
        gatsbyImageData
      }
      contentImages {
        gatsbyImageData
      }
      createdAt(formatString: "YYYY. MM. DD")
    }
  }
`;
