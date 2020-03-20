module.exports = {
  siteMetadata: {
    title: `Manik Singh`,
    description: `I write code.`,
    siteUrl: `https://www.manik.codes`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
      },
    },
  ],
}
