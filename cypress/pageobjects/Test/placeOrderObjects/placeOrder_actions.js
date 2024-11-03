import HomepageObjects from './homepage_objects'
import {common} from '../../../support/commonPageElements'
const Common = new common()
const objects = new HomepageObjects()

export default class HomepageActions {
  verifyHomepageLoads() {
    Common.h1Text()
      .contains('Premier cloud-based contact center platform')
      .should('be.visible')
  }

  clickStartFreeTrialBtn() {
    objects.startFreeTrialBtn().should('be.visible')
    objects.startFreeTrialBtn().click()
  }

  clickSubMenuOption(menuOption, subMenuOption) {
    objects.mainMenuOption(menuOption).trigger('mouseover')
    objects.subMenuOption(subMenuOption).click({force: true})
  }

  clickCloudPhoneSystemBtn() {
    objects.cloudPhoneSystemBth().click()
  }

  verifyCloudPhoneSystemSectionloads() {
    Common.h3Text().contains('Cloud Phone System').should('be.visible')
  }

  clickCloudPhoneSystemExploreMoreBth() {
    objects.cloudPhoneSystemExploreMoreBtn().click()
  }

  verifyCloudPhoneSystemPageLoads() {
    cy.url().should('include', '/features')
    Common.h2Text().contains('Cloud phone system ').should('be.visible')
  }

  clickOurAppsIosBtn() {
    objects.ourAppsIosBtn().click()
  }

  verifyAppStoreRedirection() {
    cy.url().should('include', 'apps.apple.com')
    Common.spanText().contains('App Store').should('be.visible')
  }
}
