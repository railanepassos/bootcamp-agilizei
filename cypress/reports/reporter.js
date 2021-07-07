var reporter = require('cucumber-html-reporter')

var options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/reports/cucumber-json',
  output: 'cypress/reports/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    Browser: 'Electron',
    Platform: 'Big Sur',
    Parallel: 'Scenarios',
    Executed: 'Local'
  }
}

reporter.generate(options)
