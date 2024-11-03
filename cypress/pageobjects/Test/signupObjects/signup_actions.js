import SignUpObjects from './signup_objects'
import {common} from '../../../support/commonPageElements'
const Common = new common()
const objects = new SignUpObjects()

export default class SignUpActions {
  verifySignupPageLoads() {
    cy.url().should('include', '/signup')
    Common.h3Text().contains('Welcome to Aloware').should('be.visible')
  }
  inputPhone(phone) {
    objects.phoneTxtField().clear()
    objects.phoneTxtField().type(phone).should('have.value', phone)
  }
  verifyInvalidPhoneErrorMessage(errorMessage) {
    objects.invalidPhoneErrorMessage(errorMessage).should('be.visible')
  }
  // login Question
}
