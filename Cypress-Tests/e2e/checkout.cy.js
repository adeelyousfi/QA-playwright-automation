import userData from '../fixtures/userData.json';
import productPage from '../pages/productPage.js';
import cartPage from '../pages/cartPage.js';
import checkoutPage from '../pages/checkoutPage.js';

describe('Checkout Flow Tests', () => {

    beforeEach(() => {
        cy.login(
            userData.standardUser.username,
            userData.standardUser.password
        );
    });

    it('should complete full checkout successfully', () => {

        // Add product
        productPage.addFirstProductToCart();

        // Go to cart
        productPage.goToCart();

        // Verify item exists
        cartPage.verifyItemInCart();

        // Proceed to checkout
        cartPage.proceedToCheckout();

        // Fill form using fixture data
        checkoutPage.fillCheckoutInformation(
            userData.standardUser.firstName,
            userData.standardUser.lastName,
            userData.standardUser.postalCode
        );

        // Verify overview page
        checkoutPage.verifyOverviewPage();

        // Finish order
        checkoutPage.finishCheckout();

        // Success validation
        checkoutPage.verifySuccessMessage();
    });

    it('should show validation error when checkout form is empty', () => {

        // Add product
        productPage.addFirstProductToCart();

        // Go to cart
        productPage.goToCart();

        // Proceed to checkout
        cartPage.proceedToCheckout();

        // Click continue without entering data
        cy.get('[data-test="continue"]').click();

        // FIXED: robust validation (SauceDemo-specific)
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'First Name is required');
    });

});