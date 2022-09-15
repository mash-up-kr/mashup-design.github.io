import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { ArticleSection, Header, WhatWeDo, HomeLayout } from '@/components';
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
    <HomeLayout>
      <Header />
      <main>
        <ArticleSection allContentfulArticles={allContentfulArticles} />
        <WhatWeDo />
      </main>
    </HomeLayout>
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
        tag
        thumbnail {
          gatsbyImageData
        }
        createdAt(formatString: "YYYY.MM.DD.")
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Mash-Up Design Team</title>;
