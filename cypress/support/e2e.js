import './commands'
import 'cypress-network-idle'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
