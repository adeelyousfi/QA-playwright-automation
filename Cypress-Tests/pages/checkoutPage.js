class CheckoutPage {

    fillCheckoutInformation() {
        cy.get('[data-test="firstName"]').type('Adeel');
        cy.get('[data-test="lastName"]').type('Hasan');
        cy.get('[data-test="postalCode"]').type('75600');
        cy.get('[data-test="continue"]').click();
    }

    verifyOverviewPage() {
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('.title').should('have.text', 'Checkout: Overview');
    }

    finishCheckout() {
        cy.get('[data-test="finish"]').click();
    }

    verifySuccessMessage() {
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }
}

export default new CheckoutPage();