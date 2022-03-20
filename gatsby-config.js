require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

process.env.SECRET = 'my_secret';
process.env.GATSBY_DISK_API = 'disk_api';

module.exports = {
  siteMetadata: {
    title: `Learn Gatsby demo`,
    description: `Gatsby-learn`,
    author: `liuhao`,
  },
  // flags: {
  //   // FAST_DEV: true,
  // },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
  polyfill: false,
  proxy: {
    prefix: '/api',
    url: 'http://localhost:7823'
  }
}