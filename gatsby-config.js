module.exports = {
  siteMetadata: {
    title: "JessSpoon",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-XFZBPSSWWW",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
