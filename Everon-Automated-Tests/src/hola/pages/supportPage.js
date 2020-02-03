import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from 'testcafe';


export class supportPage {

    constructor() {

        //Import Test Data
        this.holaManager = new Hola();
        this.firstNameText = this.holaManager.TestData.requestHelpFirstName;
        this.lastNameText = this.holaManager.TestData.requestHelpLastName;
        this.emailText = this.holaManager.TestData.requestHelpEmail;
        this.zipCode = this.holaManager.TestData.requestHelpPostalCode;
        this.choosenCity = this.holaManager.TestData.requestHelpCity;
        this.choosenCountry = this.holaManager.TestData.requestHelpCountry;
        this.message = this.holaManager.TestData.requestHelpMessage;
        this.errorMessage = this.holaManager.TestData.requiredFieldsErrorMessage;
        this.invalidEmailText = this.holaManager.TestData.invalidEmail;

        //Import web locators

        this.firstNameField = this.holaManager.ObjectIdentifiers.supportPage.firstNameInputField;
        this.lastNameField = this.holaManager.ObjectIdentifiers.supportPage.lastNameInputField;
        this.emailField = this.holaManager.ObjectIdentifiers.supportPage.emailInputField;
        this.postalCodeField = this.holaManager.ObjectIdentifiers.supportPage.postalCodeInputField;
        this.cityField = this.holaManager.ObjectIdentifiers.supportPage.cityInputField;
        this.countryField = this.holaManager.ObjectIdentifiers.supportPage.countryList;
        this.messageField = this.holaManager.ObjectIdentifiers.supportPage.messageTextArea;
        this.sendButton = this.holaManager.ObjectIdentifiers.supportPage.sendBtn;
        this.browseFAQsButton = this.holaManager.ObjectIdentifiers.supportPage.browseFAQsBtn;
        this.visitBlogButton = this.holaManager.ObjectIdentifiers.supportPage.visitBlogBtn;
        this.requiredFieldError = this.holaManager.ObjectIdentifiers.supportPage.requiredFieldsErrorMessage;
        this.invalidEmailErrorMessage = this.holaManager.ObjectIdentifiers.supportPage.invalidEmailFormatErrorMessage;
    }


    async setFirstNameField(firstName) {
        await t
            .typeText(XPathSelector(this.firstNameField), firstName, {replace: true})
            .expect(XPathSelector(this.firstNameField).value).eql(firstName);
    }

    async setLastNameField(lastName) {
        await t
            .typeText(XPathSelector(this.lastNameField), lastName, {replace: true})
            .expect(XPathSelector(this.lastNameField).value).eql(lastName);
    }

    async setEmailField(email) {
        await t
            .typeText(XPathSelector(this.emailField), email, {replace: true, paste: true})
            .expect(XPathSelector(this.emailField).value).eql(email);
    }

    async setPostalCodeField(postalCode) {
        await t
            .typeText(XPathSelector(this.postalCodeField), postalCode, {replace: true})
            .expect(XPathSelector(this.postalCodeField).value).eql(postalCode);
    }

    async setCityField(city) {
        await t
            .typeText(XPathSelector(this.cityField), city, {replace: true})
            .expect(XPathSelector(this.cityField).value).eql(city);
    }

    async setCountryField(country) {
        let countryOptionXpath = "//option[@value = '" + country + "' and text() = '" + country + "']";
        await t
            .click(XPathSelector(this.countryField))
            .click(XPathSelector(countryOptionXpath))
            .expect(XPathSelector(this.countryField).value).eql(this.choosenCountry);
    }

    async setMessageField(message) {
        await t
            .typeText(XPathSelector(this.messageField), message, {replace: true})
            .expect(XPathSelector(this.messageField).value).eql(message);
    }

    async submitRequestHelpForm() {
        await t
            .click(XPathSelector(this.sendButton));

    }

    async validateErrorMessageAppearsWithSpecificText(errorMessage) {
        await t
            .expect(XPathSelector(this.requiredFieldError).exists).ok()
            .expect(XPathSelector(this.requiredFieldError).innerText).eql(errorMessage);
    }

    async invalidEmailFormatErrorMessageIsVisible () {
        await t
            .expect(XPathSelector(this.invalidEmailErrorMessage).exists).ok();
    }

}