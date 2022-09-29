import { ArticleTemplateLayout, Layout } from '@/components';
import { ArticleType } from '@/components/common/ArticlePreview/ArticlePreview';
import { graphql } from 'gatsby';

interface ArticleTemplateProps {
  data: {
    contentfulArticles: ArticleType;
  };
}

const ArticleTemplate = ({ data }: ArticleTemplateProps) => {
  const { contentfulArticles } = data;

  return (
    <Layout>
      <ArticleTemplateLayout article={contentfulArticles} />
    </Layout>
  );
};

export default ArticleTemplate;

export const queryMarkdownDataBySlug = graphql`
  query getArticleDetail($slug: String) {
    contentfulArticles(slug: { eq: $slug }) {
      title
      slug
      description
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
