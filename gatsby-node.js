const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.createPages = async ({ graphql, reporter, actions }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`);

  const slugResult = await graphql(
    `
      query getArticleSlugs {
        allContentfulArticles {
          nodes {
            slug
          }
        }
      }
    `,
    { limit: 1000 },
  );

  if (slugResult.errors) {
    reporter.panicOnBuild(slugResult.errors);
    return;
  }

  if (!slugResult.data) {
    reporter.panicOnBuild('graphql query result is empty');
    return;
  }

  const articleSlugs = slugResult.data.allContentfulArticles.nodes;

  articleSlugs.forEach(({ slug }) => {
    createPage({
      path: `/article/${slug}`,
      component: articleTemplate,
      context: {
        slug,
      },
    });
  });
};
