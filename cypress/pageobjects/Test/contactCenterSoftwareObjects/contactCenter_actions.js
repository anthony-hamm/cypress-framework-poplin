// import ContactCenterObjects from './contactCenter_objects'
// const objects = new ContactCenterObjects()
import {common} from '../../../support/commonPageElements'
const Common = new common()

export default class ContactCenterActions {
  verifyContactCenterSoftwarePageLoads() {
    cy.url().should('include', '/contact-center')
    Common.h1Text().contains('Contact Center software').should('be.visible')
  }
}
