/// <reference types="cypress"/>

export class checkout{

    cartPage()
    {
        cy.get('.cart-page__heading').should('be.visible').should('have.text','Shopping Bag (1)').should('have.css','text-transform','uppercase')
    }
    checkout()
    {
        cy.get('.cart-page__right > .col--12').click({force:true})
    }
    shipping(company,addresss,apartmentsuiteetc,city,zipcode,phoneno)
    {
        cy.get(':nth-child(4) > .breadcrumb__text').should('have.text','Payment')
        cy.get('.dynamic-checkout__title').should('be.visible')
        cy.get('.dynamic-checkout__content').should('be.visible')


        cy.log('Entering shipping information')
        cy.get('#checkout_shipping_address_company').click().type(company)
        cy.get('#checkout_shipping_address_address1').click().type(addresss)
        cy.get('#checkout_shipping_address_address2').click().type(apartmentsuiteetc)
        cy.get('#checkout_shipping_address_city').click().type(city)
        cy.get('#checkout_shipping_address_zip').click().type(zipcode)
        cy.get('#checkout_shipping_address_phone').click().type(phoneno)

        cy.get('#continue_button').should('be.visible').click({force:true})
    }

    shippingconfirmation()
    {
        cy.get(':nth-child(1) > .content-box > .content-box__row').should('be.visible')
        cy.get('#continue_button').should('be.visible').click({force:true})
    }
    paymentPage()
    {
        cy.get(':nth-child(1) > .content-box > .content-box__row').should('be.visible')
        cy.get('#main-header').should('be.visible').should('include.text','Payment')

       // cy.wait(100000)
       cy.get('.shown-if-js > #continue_button').should('be.visible')
        // cy.iframe('.card-fields-iframe').eq(0).then(($iframe)=>{
        //    const body= $iframe.contents().find('body')
        // })

        // cy.get('.card-fields-iframe').eq(0).then(($iframe) => {
        //     const  $body = $iframe.contents().find('body')
        //     cy.wrap($body).find('input').click().type('11111111111111111111111111111')
        // })

    }
}