const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'drsh7f',
  
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure=true;
    },
  },
});
