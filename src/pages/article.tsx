import { ArticlesSection, Layout, SubHeader } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { graphql, HeadFC } from 'gatsby';

interface ArticlePageProps {
  data: {
    allContentfulArticles: {
      nodes: ArticleType[];
    };
  };
}

const Article = ({ data }: ArticlePageProps) => {
  const { allContentfulArticles } = data;

  return (
    <Layout>
      <SubHeader
        title="Design Article"
        description="매시업 디자인팀의 디자인 고찰 이야기"
        color="blue"
      />
      <ArticlesSection articles={allContentfulArticles.nodes} />
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query getArticlePageData {
    allContentfulArticles {
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
  }
`;

export const Head: HeadFC = () => <title>Mash-Up Design Team - Article</title>;
