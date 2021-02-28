module.exports = {
  siteMetadata: {
    title: "JessSpoon"
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-XFZBPSSWWW",
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css"
  ]
};
