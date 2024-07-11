import BasePage from "../pages/base/BasePage.js";
import PageLocators from '../locators/PageLocators.js';


export default new class ProductPage extends BasePage {
    constructor() {
        super();
    }

    /**
     * Adds the selected product to the cart
     * And returns the name of the product
     * @returns 
     */
    async AddProductToCart() {
        if (this.isElementVisibleByXpath(PageLocators._ProductNameElement)) {
            await this.waitUntilElementIsEnabled(PageLocators._AddToCartButton);
            await this.clickByXpath(PageLocators._AddToCartButton);
            return await this.getElementTextByXpath(PageLocators._ProductNameElement);
        } else {
            assert.fail("No products available to add to the cart");
            return null;
        }
    }

}



