/// <reference types="cypress"/>

export class checkout{

    cartPage()
    {
        cy.get('.cart-page__heading').should('be.visible').should('have.text','Shopping Bag (1)').should('have.css','text-transform','uppercase')
    }
}