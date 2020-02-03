import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from 'testcafe';

export class contactUsPage {

    constructor() {
        //Import web locators and Test Data

        this.holaManager = new Hola();
        this.requestHelp = this.holaManager.ObjectIdentifiers.contactUsPage.requestHelpButton;

    }

    async clickOnRequestHelpButton() {
        await t
            .click(XPathSelector(this.requestHelp));
    }
}