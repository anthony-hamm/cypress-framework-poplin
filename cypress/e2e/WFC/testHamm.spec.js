import SignUpActions from '../../pageobjects/Test/signupObjects/signup_actions'

const signUp = new SignUpActions()

describe('Aloware - Login', () => {
  let data
  beforeEach(() => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    )
  })

  it('sample login', () => {
    signUp.inputPhone(data.invalidPhone)
    signUp.verifyInvalidPhoneErrorMessage(data.verifyInvalidPhoneErrorMessage)
  })
})
