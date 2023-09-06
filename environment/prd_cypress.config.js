const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/api/v2',
    failOnStatusCode : false,
    defaultCommandTimeout: 4000,
    responseTimeout: 4000
  },
})