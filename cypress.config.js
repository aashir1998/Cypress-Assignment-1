const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (config.env.ENVIRONMENT == "assignment1"){
        return {
          baseUrl: "http://the-internet.herokuapp.com/",
          specPattern: "cypress/e2e/assignment1/**/*.cy.js"
        }
      }
      

    },
  },
});