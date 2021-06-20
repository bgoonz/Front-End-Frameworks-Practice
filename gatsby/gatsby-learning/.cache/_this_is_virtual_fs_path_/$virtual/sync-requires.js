// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(
    require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/.cache/dev-404-page.js")
  ),
  "component---src-pages-404-js": preferDefault(
    require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/src/pages/404.js")
  ),
  "component---src-pages-index-js": preferDefault(
    require("/mnt/c/MY-WEB-DEV/BLOG____2.0/MEDIUM/materials/front-end-frameworks/gatsby/gatsby-learning/src/pages/index.js")
  ),
};
