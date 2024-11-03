import SignUpActions from '../../pageobjects/Test/signupObjects/signup_actions'

const signUp = new SignUpActions()

describe('Aloware - Sign Up tests', () => {
  let data
  beforeEach(() => {
    cy.goToSignUpPage()
    cy.fixture('testData').then(function (fdata) {
      data = fdata
    })
  })

  it('REQ-9 - Verify error message for invalid phone number format', () => {
    signUp.inputPhone(data.invalidPhone)
    signUp.verifyInvalidPhoneErrorMessage(data.verifyInvalidPhoneErrorMessage)
  })
})
