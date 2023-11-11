import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/dspx-react-demo`,
  siteMetadata: {
    title: `DSPX React Demo`,
    siteUrl: `https://visitador.github.io/dspx-react-demo/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
