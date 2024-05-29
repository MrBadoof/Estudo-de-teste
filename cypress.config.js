const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs:true,
    baseUrl: 'https://cypress-playground.s3.eu-central-1.amazonaws.com',
  },
  
});
