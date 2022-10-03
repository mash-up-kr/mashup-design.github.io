const path = require('path');

exports.createArticlePage = async ({ graphql, reporter, actions }) => {
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
      path: `article/${slug}`,
      component: articleTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.createProjectPage = async ({ graphql, reporter, actions }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/projectTemplate.tsx`);

  const slugResult = await graphql(
    `
      query getProjectSlugs {
        allContentfulProject {
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

  const projectSlugs = slugResult.data.allContentfulProject.nodes;

  projectSlugs.forEach(({ slug }) => {
    createPage({
      path: `projects/${slug}`,
      component: projectTemplate,
      context: {
        slug,
      },
    });
  });
};
