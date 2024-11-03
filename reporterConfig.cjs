module.exports = {
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: './reports/[hash].xml',
    toConsole: true,
    testCaseSwitchClassnameAndName: true,
  },
}
