import BasePage from "../pages/base/BasePage.js";
import PageLocators from "../locators/PageLocators.js";


export default new class CartPage extends BasePage {
    constructor() {
        super();
        this.pageTitle = "Cart - TAKEALOT";
    }

    /**
     * Navigates to the Cart after adding an item to it
     */
    async GoToCart() {
        await this.clickByXpath(PageLocators._GotoCartButton);
    }

    /**
     * Returns the name of the Product in the cart
     * @returns 
     */
    async GetProductNameInCart() {
        return await this.getElementTextByXpath(PageLocators._ProductInCartElement);
    }

}