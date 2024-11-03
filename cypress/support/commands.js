// login command
Cypress.Commands.add('login', (email, password) => {
  // navigate to login page
  cy.visit(Cypress.env().urls.loginUrl)
  cy.url().should('include', 'auth')
  cy.get('span#buttonLabel-phone-login-button').contains('Email').click()
  // input email address
  cy.get('input#email').should('be.visible')
  cy.get('input#email').type(email, {delay: 10}).should('have.value', email)
  // submit email form
  cy.get('span#buttonLabel-email-login-button').click()
  // input password
  cy.get('#enter-password').should('be.visible')
  cy.get('#enter-password').type(password).should('have.value', password)
  // click login btn
  cy.get('#buttonLabel-enter-password-login-button').click()
  // accept permissions modal if displayed
  cy.wait(2000)
  cy.get('body').then(body => {
    if (body.find('#notification-permission-ok').length > 0) {
      cy.get('#notification-permission-ok').click()
    }
  })
  // TEMP - there is a bug displaying the permissions modal twice
  cy.get('body').then(body => {
    if (body.find('#notification-permission-ok').length > 0) {
      cy.get('#notification-permission-ok').click()
    }
  })
  // verify user landed the homepage
  cy.url().should('include', '/laundry')
  cy.get('.nav-footer-tabs').should('be.visible')
})
