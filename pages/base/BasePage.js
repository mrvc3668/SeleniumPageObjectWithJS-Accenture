import { Builder } from 'selenium-webdriver';
let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: (10000) });
driver.manage().window().maximize();

/**
 * Base Page Including selenium function
 */
export default class BasePage {

    constructor() {
    }

    /**
     * Navigates to the given url
     * @param {*} theURL 
     */
    async go_to_url(theURL) {
        await driver.get(theURL);
        this.WaitForPageToLoad();
    }

    /**
     * Refreshes the page
     */
    async refreshPage() {
        await driver.navigate().refresh();
    }

    /**
     * Sends through text to a provided input
     * @param {*} xpath 
     * @param {*} text 
     */
    async enterTextByXpath(xpath, text) {
        await driver.findElement(xpath).sendKeys(text);
    }

    /**
     * Waits until page has finished loading
     */
    async WaitForPageToLoad() {
        await driver.wait(function () {
            return driver.executeScript('return document.readyState').then(function (readyState) {
                return readyState === 'complete';
            });
        });
    }

    /**
     * 
     * @param {*} xpath 
     */
    async clickByXpath(element) {
        await driver.findElement(element).click();
        await this.WaitForPageToLoad();
    }

    /**
     * Returns the list of all elements
     * @param {*} xpath 
     * @returns 
     */
    async findAllElementsByXpath(xpath) {
        return await driver.findElements(xpath);
    }

    /**
     * Waits until element is visible
     * @param {*} xpath 
     * @returns 
     */
    async isElementVisibleByXpath(xpath) {
        return await driver.findElement(xpath).isDisplayed();
    }

    /**
     * Retrieves the text of the provided element
     * @param {*} xpath 
     * @returns 
     */
    async getElementTextByXpath(element) {
        return await driver.findElement(element).getText();
    }

    /**
     * Scrolls the page to the provided element
     * @param {*} element 
     */
    async scrollIntoElementView(element) {
        var js_code = "arguments[0].scrollIntoView();"
        await driver.executeScript(js_code, element);
    }

    async waitUntilElementIsEnabled(element) {
        return await driver.findElement(element).isEnabled();
    }

    /**
     * Ends the chrome driver session
     */
    async closeBrowser() {
        await driver.close();
    }

    /**
     * 
     * @returns 
     */
    async getPageTitle() {
        await driver.getTitle();
    }
}

