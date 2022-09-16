import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { ArticleSection, Header, WhatWeDo, HomeLayout, ProjectSection } from '@/components';
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
    <HomeLayout>
      <Header />
      <main>
        <ArticleSection allContentfulArticles={allContentfulArticles} />
        <WhatWeDo />
        <ProjectSection allContentfulProject={allContentfulProject} />
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
    allContentfulProject {
      nodes {
        title
        slug
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
