import HomepageActions from '../../pageobjects/Test/homepageObjects/homepage_actions'
import SignUpActions from '../../pageobjects/Test/signupObjects/signup_actions'
import ContactCenterActions from '../../pageobjects/Test/contactCenterSoftwareObjects/contactCenter_actions'
import CloudPhoneSystemActions from '../../pageobjects/Test/cloudPhoneSystemObjects/cloudPhoneSystem_actions'

const homepage = new HomepageActions()
const signup = new SignUpActions()
const contactCenter = new ContactCenterActions()
const cloudPhoneSystem = new CloudPhoneSystemActions()

describe('Aloware - Homepage tests', () => {
  beforeEach(() => {
    cy.goToHomepage()
  })
  it('REQ-1 - Home page loads successfully', () => {
    homepage.verifyHomepageLoads()
  })

  it('REQ-4 - Verify "Start free trial" button works successfully', () => {
    homepage.clickStartFreeTrialBtn()
    signup.verifySignupPageLoads()
  })

  it('REQ-24 - Verify the functionality of the "Contact Center Software" button', () => {
    homepage.clickSubMenuOption('Solutions', 'Contact Center Software')
    contactCenter.verifyContactCenterSoftwarePageLoads()
  })

  it('REQ-82 - Verify the functionality of the "Explore More" button for "Cloud Phone System" section', () => {
    homepage.clickCloudPhoneSystemBtn()
    homepage.verifyCloudPhoneSystemSectionloads()
    homepage.clickCloudPhoneSystemExploreMoreBth()
    cloudPhoneSystem.verifyCloudPhoneSystemPageLoads()
  })

  it('REQ-101 - User is successfully redirected to "IOS" store', () => {
    homepage.clickOurAppsIosBtn()
    homepage.verifyAppStoreRedirection()
  })
})
