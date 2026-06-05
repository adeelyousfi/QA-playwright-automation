class ProductPage {

    verifyOnProductsPage() {
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    }

    addFirstProductToCart() {
        cy.get('.inventory_item').first().find('button').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default new ProductPage();