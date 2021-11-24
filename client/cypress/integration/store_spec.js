const { exit } = require('process');

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('/')
    })

    describe('Implicit Assertions for Landing Page & Product detail', () => {
        it('user can add items & clear shopping cart', async() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            
            await cy.get('[data-testid=btn-1]').click()
            await cy.get('[data-testid=btn-2]').click()
            await cy.get('[data-testid=btn-1]').click()
            await cy.get('#cart-total').scrollIntoView({ easing: 'linear' })
            cy.fin
            await cy.get('.input').type("fresh");
            cy.get('[data-testid=img-3]').should('exist')
            cy.get('[data-testid=img-3]').click()
            cy.get('[data-testid=detail-btn]').click();
            await cy.get('[data-testid=cart-total]')
            cy.wait(1000)
            cy.get('[data-testid=cart-total]').scrollIntoView({ offset: { top: 0, left: 0 } }).contains('3');
           // cy.findByText("3").scrollIntoView({ offset: { top: 0, left: 0 } }).should('be.visible');
            await cy.get('[data-testid=shopping-cart-btn]').click({force: true})
            cy.wait(1000)
            cy.get('[data-testid=cart-total]').scrollIntoView({ offset: { top: 0, left: 0 } }).contains('0');
        });
    });

});