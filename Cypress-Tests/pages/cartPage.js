class cartPage {

    verifyItemInCart() {
        cy.get('.cart_item').should('be.visible');
        cy.get('.inventory_item_name').should('be.visible');
    }

    getCartItemCount() {
        return cy.get('.shopping_cart_badge').invoke('text');
    }

    proceedToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    removeItem() {
        cy.get('.cart_button').contains('Remove').click();
    }
}

export default new cartPage();