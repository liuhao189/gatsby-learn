const path = require('path');

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
}

exports.createPages = async({ actions, graphql }) => {}

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {

    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    externals: {
      'jQuery': '$'
    }
  })
}