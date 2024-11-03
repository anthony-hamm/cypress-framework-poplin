// import CloudPhoneSystemObjects from './CloudPhoneSystem_objects'
// const objects = new CloudPhoneSystemObjects()
import {common} from '../../../support/commonPageElements'
const Common = new common()

export default class CloudPhoneSystemActions {
  verifyCloudPhoneSystemPageLoads() {
    cy.url().should('include', '/features')
    Common.h2Text().contains('Cloud phone system ').should('be.visible')
  }
}
