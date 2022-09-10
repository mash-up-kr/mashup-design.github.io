import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import Layout from '@/components/common/Layout/Layout';
import { ArticleSection, Header } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';

interface IndexPageProps {
  data: {
    allContentfulArticles: {
      nodes: ArticleType[];
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { allContentfulArticles } = data;

  return (
    <Layout>
      <Header />
      <main>
        <ArticleSection allContentfulArticles={allContentfulArticles} />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query getArticles {
    allContentfulArticles {
      nodes {
        title
        slug
        description
        categories
        thumbnail {
          gatsbyImageData
        }
        createdAt(formatString: "YYYY.MM.DD.")
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Mash-Up Design Team</title>;
