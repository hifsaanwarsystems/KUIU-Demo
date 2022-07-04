/// <reference types="cypress"/>

export class account{
    login(email,password){
        cy.get('.global-header__nav__icons > #account > .clickable--icon').click()
        cy.url().should('include','https://www.kuiu.com/account/login')

        //entering login details
        cy.get('#login-email').click().should('be.visible').type(email)
        cy.get('#login-password').click().should('be.visible').type(password)


        //verifying help column
        cy.get('#shopify-section-login-help-card > .flex--direction-column').should('be.visible')

        //order status column
        cy.get('.Category-Product-Header-Feature-Callout').should('have.text','YOUR ORDER STATUS')
        cy.get('.margin-bottom--15 > .Primary-Content-Copy').should('have.text','Create an account to check your order status and view your order history.')
        cy.get('.check-order-button > .clickable--contained').should('be.visible')

        //logging in
        cy.get('#customer_login > .clickable--contained').click()
        cy.url().should('include','/account')
    }


    myaccount()
    {
        //account menu
        cy.get('.account-menu').should('be.visible').should('exist')
        cy.get('.account-page__order-container-empty').should('have.text',"You haven't placed any orders yet.")


        //start shopping
        cy.get('a > .clickable--contained').should('be.visible').click({force:true})
    }

}