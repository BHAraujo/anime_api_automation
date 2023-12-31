const { defineConfig } = require('cypress')
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/api/v1',
    failOnStatusCode : false,
    defaultCommandTimeout: 4000,
    responseTimeout: 4000,
    reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
      charts: true,
      reportPageTitle: 'Api Automation',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

  setupNodeEvents(on, config) {
  
   require('cypress-mochawesome-reporter/plugin')(on);
      
   }

  },
})



