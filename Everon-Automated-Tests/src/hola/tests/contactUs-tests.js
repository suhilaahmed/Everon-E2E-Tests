import {EvBoxHomePage} from '../pages/evBoxHomePage';
import {contactUsPage} from "../pages/contactUsPage";
import {supportPage} from "../pages/supportPage";
import {CommonUtilities} from "../utilities/CommonUtilities";

const EvBoxHome = new EvBoxHomePage();
const contactUs = new contactUsPage();
const support = new supportPage();
const contactUsUrl = EvBoxHome.URL + EvBoxHome.contactUsUrl;

fixture`Contact Us Fixture`
    .page`https://evbox.com/en/`;


test('Submit request help form with empty first name', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty last name', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty email', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty postal code', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty city', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty country', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with empty message', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.submitRequestHelpForm();
    await support.validateErrorMessageAppearsWithSpecificText(support.errorMessage);
});

test('Submit request help form with invalid email', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.invalidEmailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await support.invalidEmailFormatErrorMessageIsVisible();
});

test('Submit request help form with valid credentials', async t => {
    await EvBoxHome.navigateToEvBoxHomePage();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL);
    await EvBoxHome.hoverOnAboutMenu();
    await EvBoxHome.clickOnContactUsOption();
    await EvBoxHome.assertOnPageUrl(contactUsUrl);
    await contactUs.clickOnRequestHelpButton();
    await support.setFirstNameField(support.firstNameText);
    await support.setLastNameField(support.lastNameText);
    await support.setEmailField(support.emailText);
    await support.setPostalCodeField(support.zipCode);
    await support.setCityField(support.choosenCity);
    await support.setCountryField(support.choosenCountry);
    await support.setMessageField(support.message);
    await support.submitRequestHelpForm();
    await EvBoxHome.assertOnPageUrl(EvBoxHome.URL + 'thank-you-request');
    await CommonUtilities.validateElementIsVisible(support.browseFAQsButton);
    await CommonUtilities.validateElementIsVisible(support.visitBlogButton);
});