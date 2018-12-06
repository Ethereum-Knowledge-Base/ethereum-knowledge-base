module.exports = {
  siteMetadata: {
    title: `Learn Web3`,
    baseUrl: `https://learnweb3.com`,
    homepageTitle: `Learn Web3 - Education on Web 3.0`,
    description: `Hub for Education on the new Web 3.0 and cryptocurrencies`,
    keywords: `education, learning, web3, blockchain, tokens, cryptocurrency, wallet, ethereum, bitcoin`,
    socialCard: `learn-web3-social.png`,
    twitterUsername: `@learnweb3`,
    facebookId: `240511650174545`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'learn-web3-website',
        short_name: 'learn-web3',
        start_url: '/',
        background_color: '#294390',
        theme_color: '#eb4669',
        display: 'minimal-ui',
        icon: 'src/images/learn-web3-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
  ],
}
