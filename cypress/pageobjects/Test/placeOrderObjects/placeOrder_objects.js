export default class AddressAndLocationsObjects {
  startFreeTrialBtn() {
    return cy.get('.main-header .call-btn a').contains('Start free trial')
  }
  mainMenuOption(option) {
    return cy.get('#header-menu').find('a').contains(option)
  }
  subMenuOption(option) {
    return cy.get('.mega-submenu a').contains(option)
  }
  cloudPhoneSystemBth() {
    return cy.get('.f-titlebox').contains('Cloud Phone System')
  }
  cloudPhoneSystemExploreMoreBtn() {
    return cy.get('.feature-popup-content a[href="/features/"]')
  }
  ourAppsIosBtn() {
    return cy.get('.app-btns a span').contains('For IOS')
  }
}
