// import PlaceOrderActions from '../../pageobjects/Test/placeOrderObjects/placeOrder_actions'

// const placeOrder = new PlaceOrderActions()
const email = Cypress.env().users.wfcUser
const password = Cypress.env().users.wfcPassword

describe('Poplin - Place Order tests', () => {
  before(() => {
    cy.login(email, password) // code added in support > commands.js
  })

  // beforeEach(() => {
  //   cy.goToHomepage()
  // })
  it('ID-2 - Existing user place new order successfully', () => {
    // tests
  })
})
