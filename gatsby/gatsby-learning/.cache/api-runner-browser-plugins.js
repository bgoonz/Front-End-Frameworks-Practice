module.exports = [
  {
    plugin: require("../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js"),
    options: { plugins: [] },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js"),
    options: { plugins: [] },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-image/gatsby-browser.js"),
    options: { plugins: [] },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),
    options: {
      plugins: [],
      trackingId: "xuKmnYfLXpaHZC-p2yfVGs_D-hi9MOz2ggAIoK15wVA",
      head: false,
      anonymize: false,
      respectDNT: false,
      exclude: [],
      pageTransitionDelay: 0,
    },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-manifest/gatsby-browser.js"),
    options: {
      plugins: [],
      icon: "src/images/icon.png",
      legacy: true,
      theme_color_in_head: true,
      cache_busting_mode: "query",
      crossOrigin: "anonymous",
      include_favicon: true,
      cacheDigest: "53aa06cf17e4239d0dba6ffd09854e02",
    },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-mdx/gatsby-browser.js"),
    options: {
      plugins: [],
      extensions: [".mdx"],
      defaultLayouts: {},
      gatsbyRemarkPlugins: [],
      lessBabel: false,
      remarkPlugins: [],
      rehypePlugins: [],
      mediaTypes: ["text/markdown", "text/x-markdown"],
      root: "/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning",
    },
  },
];
