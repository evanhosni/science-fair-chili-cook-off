module.exports = {
  "stories": [
    // "../stories/Page.stories.js",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  env: (config) => ({
    ...config,
    API_KEY:"AIzaSyAzlA3HtawAc6D_mhF3-h4pzPF6tWnKW5E"
  })
}