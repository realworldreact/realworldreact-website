module.exports = {
  siteMetadata: {
    title: 'Real World React',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-jss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UX-00000' }
    }
  ],
};
