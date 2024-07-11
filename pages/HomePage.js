import BasePage from "../pages/base/BasePage.js";
import PageLocators from '../locators/PageLocators.js';


export default new class HomePage extends BasePage {
    constructor() {
        super();
        this.pageTitle = "Takealot.com: Online Shopping | SA's leading online store";
    }

    /**
     * Cancels the notification pop up on the home page
     */
    async CancelNotificationPopUp(){
        if(this.isElementVisibleByXpath(PageLocators._CancelNotificationElement)){
            await this.clickByXpath(PageLocators._CancelNotificationElement);
        }
    }

    /**
     * Goes through all product elements then halves it by 2 then 
     * scrolls to element in view and selects any random product
     */
    async FindAndClickRandomProduct() {
        var elements = await this.findAllElementsByXpath(PageLocators._AllProductsElement);
        var maxElements = (await elements).length;
        var randomElement = Math.floor(Math.random() * maxElements / 2);

        await this.scrollIntoElementView(elements.at(randomElement));
        await elements.at(randomElement).click();
    }
    
}
