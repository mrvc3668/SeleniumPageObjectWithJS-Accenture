import { By } from 'selenium-webdriver';


/**
 * Getters for page locators
 */
export default new class PageLocators {

    constructor() {
        this.globalSearchInput = By.xpath("//input[@name='search']");
        this.CancelProductNotificationsButton = By.xpath("//button[text()='NOT NOW']");
        this.addToCartButton = By.xpath("//div[contains(@class,'buybox-actions-module_add-to-cart')]");
        this.productNameElement = By.xpath("//div[@class='product-title']//div//h1");
        this.cartButton = By.xpath("//button[contains(@class,'mini-cart-button')]");
        this.viewCartButton = By.xpath("//button//i[contains(@class,'cart-module_checkout')]");
        this.productNameInCartElement = By.xpath("//div//a//h3[contains(@class,'cart-item')]");
        this.productElements = By.xpath("//div[contains(@class,'product-card product-card-module_product')]");
        this.gotoCartButton = By.xpath("//button[@class='button checkout-now dark']");
    }

    get _GlobalSearchInput() {
        return this.globalSearchInput
    }

    get _GotoCartButton() {
        return this.gotoCartButton
    }

    get _CancelNotificationElement() {
        return this.CancelProductNotificationsButton
    }

    get _AddToCartButton() {
        return this.addToCartButton
    }

    get _ProductNameElement() {
        return this.productNameElement
    }

    get _CartButtonElement() {
        return this.cartButton
    }

    get _ViewCartButton() {
        return this.viewCartButton
    }

    get _ProductInCartElement() {
        return this.productNameInCartElement
    }

    get _AllProductsElement() {
        return this.productElements
    }

}