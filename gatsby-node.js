const path = require('path');
const { createArticlePage, createProjectPage } = require('./src/gatsby/createPages');

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

exports.createPages = async (params) => {
  await Promise.all([createArticlePage(params), createProjectPage(params)]);
};
