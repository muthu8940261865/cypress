const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
//cypress.config.js
/*module.exports = {
  e2e: {
    baseUrl: 'https://core-prod-api.techademy.com', // base URL 
  },
};*/
{
  "defaultCommandTimeout";5000
  "pageLoadTimeout";10000
}
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
  },
};

