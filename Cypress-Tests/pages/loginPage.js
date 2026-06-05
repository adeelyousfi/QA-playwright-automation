class LoginPage {
    
    visit() {
        cy.visit('https://www.saucedemo.com/');
        cy.clearAllLocalStorage();
    }

    enterUsername(username) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#login-button').click();
    }

    verifySuccessfulLogin() {
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('be.visible').and('have.text', 'Products');
    }

    verifyLockedOutError() {
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'locked out');
    }

    // We will add more methods later
}

export default new LoginPage();