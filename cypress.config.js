const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(config) // see everything in here!
      
      // modify config values
      config.defaultCommandTimeout = 100000
      config.pageLoadTimeout=100000
      config.viewportHeight=1400
      config.viewportWidth=1200
      
    },
  },
});
