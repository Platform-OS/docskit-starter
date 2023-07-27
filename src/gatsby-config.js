const path = require('path');

module.exports = {
  assetPrefix: process.env.ASSET_PREFIX,
  siteMetadata: {
    title: 'DocsKit Starter',
    description: 'Open-source Docs as Code documentation solution leveraging platformOS, a git workflow, and a static site generator',
    author: 'platformOS'
  },
    plugins: [
      '@platformos/gatsby-theme-platformos-docskit',
      '@platformos/gatsby-plugin-posify',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'DocsKit Starter',
          short_name: 'DocsKit Starter',
          start_url: '/',
          background_color: '#663399',
          display: 'minimal-ui',
          icon: path.join(__dirname, 'src/images/favicon.png'), // This path is relative to the root of the site.
        },
      },
    ],
  }
