const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /*
      Function in which node events can be 
      registered and config can be modified.
       Takes the place of the (removed) 
       pluginFile option.
      */
    },
    baseUrl : "/",
    experimentalRunAllSpecs : false,
    slowTestThreshold : 10000,
    testIsolation : true
  },

  //Default values
  clientCertificates : [],
  env : {},
  includeShadowDom : false,
  numTestsKeptInMemory : 50,
  port : null,
  redirectionLimit : 20, 
  reporter : "spec",
  reporterOptions : null,
  retries : { 
     "runMode": 0,
     "openMode": 0 
  },
  //Default Timeouts milliseconds
  defaultCommandTimeout : 4000,
  execTimeout : 60000,
  taskTimeout : 60000,
  pageLoadTimeout : 60000,
  requestTimeout : 5000,
  responseTimeout : 30000,
  //Default Folders / Files
  downloadsFolder : "cypress/downloads",
  // fileServerFolder : root project folder,
  fixturesFolder : "cypress/fixtures",
  screenshotsFolder : "cypress/screenshots",
  videosFolder : "cypress/videos",
  //Default Screenshots configs
  screenshotOnRunFailure : true,
  trashAssetsBeforeRuns : true,
  //Default Video configs
  videoCompression : 32, 
  video : true,
  videoUploadOnPasses : true,
  //Default Browser configs
  chromeWebSecurity : true,
  blockHosts : null,
  modifyObstructiveCode : true,
  userAgent : null,
  //Default Viewport
  viewportHeight : 660,
  viewportWidth : 1000,
  //Default Actionability
  animationDistanceThreshold : 5,
  waitForAnimations : true,
  scrollBehavior : top
});