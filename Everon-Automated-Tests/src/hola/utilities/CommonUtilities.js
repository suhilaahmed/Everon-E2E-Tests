import { ClientFunction } from 'testcafe';
import {t} from 'testcafe';
import XPathSelector from '../utilities/xpath-selector';



export class CommonUtilities {

    static waitInSeconds(seconds){
        seconds = seconds *100;
        const start = new Date().getTime();
        let end = start;
        while(end < start + seconds) {
            end = new Date().getTime();
        }
    }

    static getTimeStampInMS () {
        return (new Date()).getTime();
    }

    static getCurrentDate () {

    }

    static getPageUrl = ClientFunction(() => window.location.href);

    static async validateElementIsVisible (element) {
        await t
            .expect(XPathSelector(element).exists).ok();
    }

    static setAttribute = ClientFunction(selector => {
        let element = document.querySelector(selector);

        element.setAttribute('visibility', 'hidden');
        // element.setAttribute('display', 'none')
    });


}