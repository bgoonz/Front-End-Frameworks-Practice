var plugins = [
  {
    name: "gatsby-plugin-theme-ui",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-theme-ui/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    name: "gatsby-plugin-image",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-image/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    name: "gatsby-plugin-google-analytics",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-google-analytics/gatsby-ssr"),
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
    name: "gatsby-plugin-react-helmet",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-react-helmet/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    name: "gatsby-plugin-sitemap",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-sitemap/gatsby-ssr"),
    options: {
      plugins: [],
      output: "/sitemap",
      createLinkInHead: true,
      entryLimit: 45000,
      query:
        "{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }",
      excludes: [],
    },
  },
  {
    name: "gatsby-plugin-manifest",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-manifest/gatsby-ssr"),
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
    name: "gatsby-plugin-mdx",
    plugin: require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/node_modules/gatsby-plugin-mdx/gatsby-ssr"),
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
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    try {
      const result = plugin.plugin[api](args, plugin.options);
      if (result && argTransform) {
        args = argTransform({ args, result });
      }
      return result;
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`;
      }

      throw e;
    }
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
