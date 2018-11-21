module.exports = {
  siteMetadata: {
    title: 'Learn Web3',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'learn-web3-website',
        short_name: 'learn-web3',
        start_url: '/',
        background_color: '#294390',
        theme_color: '#eb4669',
        display: 'minimal-ui',
        icon: 'src/images/learn-web3-draft.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
