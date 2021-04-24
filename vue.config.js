require = require('esm')(module);
const { routes } = require('./src/router/index.js');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/styles.scss";`
      }
    }
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://new.ksaizegem.be',
      routes,
    }
  }
};