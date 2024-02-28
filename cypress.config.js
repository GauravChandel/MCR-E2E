const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.mycrewrooms.com/clients/sign_in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


  // To add more env 
  // env:{
  //   Testing :'https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/',
  // },
});
