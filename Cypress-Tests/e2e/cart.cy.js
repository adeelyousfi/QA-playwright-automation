import userData from '../fixtures/userData.json';
import productPage from '../pages/productPage.js';
import cartPage from '../pages/cartPage.js';

describe('Cart Functionality Tests', () => {

    beforeEach(() => {
        cy.login(
            userData.standardUser.username,
            userData.standardUser.password
        );
    });

    it('should add product to cart and verify badge', () => {

        productPage.addFirstProductToCart();

        // Cart badge validation
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', '1');

        productPage.goToCart();

        cartPage.verifyItemInCart();
    });

    it('should remove product from cart', () => {

        productPage.addFirstProductToCart();
        productPage.goToCart();

        cartPage.removeItem();

        cy.get('.cart_item')
            .should('not.exist');
    });

});