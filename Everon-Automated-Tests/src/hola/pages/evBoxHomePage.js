import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from 'testcafe';
import {CommonUtilities} from "../utilities/CommonUtilities";

export class EvBoxHomePage {

    constructor() {
        //Import web locators and Test Data

        this.holaManager = new Hola();
        this.URL = this.holaManager.TestData.url;
        this.contactUsUrl = this.holaManager.TestData.contactUsPageURI;
        this.aboutMenuLabel = this.holaManager.ObjectIdentifiers.HomePage.aboutMenu;
        this.contactUs = this.holaManager.ObjectIdentifiers.HomePage.contactUsOption;
        this.acceptCookies = this.holaManager.ObjectIdentifiers.HomePage.acceptCookiesButton;
    }

    async navigateToEvBoxHomePage () {
        await t.navigateTo(this.URL)
            .maximizeWindow()
            .click(XPathSelector(this.acceptCookies));
    }

    async hoverOnAboutMenu() {
        await t
            .hover(XPathSelector(this.aboutMenuLabel));
    }

    async clickOnContactUsOption () {
        await t
            .click(XPathSelector(this.contactUs));
    }

    async assertOnPageUrl(url) {
        await t
            .expect(CommonUtilities.getPageUrl()).contains(url);
    }

}
