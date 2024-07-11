import HomePage from "../pages/HomePage.js"
import ProductPage from "../pages/ProductPage.js"
import CartPage from "../pages/CartPage.js"
import { CONSTANTS } from "../constants.js";
import { assert } from "chai";


describe('eCommerce testing', function () {
    beforeEach(async function () {
        //Navigate to the site and cancel the notification pop up
        await HomePage.go_to_url(CONSTANTS.UI.BASE_URL);
        await HomePage.CancelNotificationPopUp();
    });

    it('Add Product to the Cart and Verify the correct Product has been added to the Cart', async function () {

        var expectedHomePageTitle = HomePage.pageTitle;
        HomePage.getPageTitle().then(function (result) {
            assert.equal(expectedHomePageTitle, result);
        })

        await HomePage.FindAndClickRandomProduct();
        var expectedProductName = await ProductPage.AddProductToCart();
        ProductPage.getPageTitle().then(function (result) {
            assert.equal(expectedProductName, result);
        })

        await CartPage.GoToCart();
        var expectedCartPageTitle = CartPage.pageTitle;
        CartPage.getPageTitle().then(function (result) {
            assert.equal(expectedCartPageTitle, result);
        })

        var actualProductName = await CartPage.GetProductNameInCart();
        assert.equal(expectedProductName, actualProductName);
    });

    afterEach(async function () {
        await HomePage.closeBrowser();
    });

})


