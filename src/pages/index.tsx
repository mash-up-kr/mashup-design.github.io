import { graphql, HeadFC } from 'gatsby';
import {
  ArticleSection,
  Header,
  WhatWeDo,
  Layout,
  ProjectSection,
  PromotionSection,
} from '@/components';
import { ArticleType, ProjectType } from '@/components/common/ArticlePreview/ArticlePreview';

interface IndexPageProps {
  data: {
    allContentfulArticles: {
      nodes: ArticleType[];
    };
    allContentfulProject: {
      nodes: ProjectType[];
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { allContentfulArticles, allContentfulProject } = data;

  return (
    <Layout>
      <Header />
      <main>
        <ArticleSection allContentfulArticles={allContentfulArticles} />
        <WhatWeDo />
        <ProjectSection allContentfulProject={allContentfulProject} />
        <PromotionSection />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query getIndexPageData {
    allContentfulArticles(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
        description
        tag
        thumbnail {
          gatsbyImageData
        }
        createdAt(formatString: "MMMM DD, YYYY")
      }
    }
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

export const Head: HeadFC = () => <title>Mash-Up Design Team</title>;
