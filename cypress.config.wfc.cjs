const {defineConfig} = require('cypress')
const {readFileSync} = require('fs-extra')
const browserstackTestObservabilityPlugin = require('browserstack-cypress-cli/bin/testObservability/plugin')

const e2eConfig = {
  pageLoadTimeout: 60000,
  baseUrl: 'https://nonprod-app.poplin.co/',
  includeShadowDom: true,
  defaultCommandTimeout: 40000,
  chromeWebSecurity: false,
  specPattern: ['cypress/e2e/WFC/**.spec.js'],
  responseTimeout: 100000,
  setupNodeEvents(on, config) {
    browserstackTestObservabilityPlugin(on, config)
    const envName = config.env.name
    const text = readFileSync(`./cypress.${envName}.json`)
    const values = JSON.parse(text)
    config.env = {
      ...values,
    }
    return config
  },
}

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  e2e: e2eConfig,
})
