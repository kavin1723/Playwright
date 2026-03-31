module.exports = {
  default: {
    require: [
      './step-definitions/*.js',
      './support/*.js'
    ],
    tags:'not @skip',
    format: ['progress', 'json:reports/cucumber-report.json'],
    publishQuiet: true
  }
};