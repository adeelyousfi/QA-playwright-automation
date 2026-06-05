import userData from '../fixtures/userData.json';
import productPage from '../pages/productPage.js';

describe('Smoke Test - Swag Labs', () => {

    beforeEach(() => {
        cy.login(
            userData.standardUser.username,
            userData.standardUser.password
        );
    });

    it('should successfully login and load products page', () => {

        // Verify landing page
        productPage.verifyOnProductsPage();

        // Core UI sanity checks
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.shopping_cart_link').should('be.visible');
    });

});