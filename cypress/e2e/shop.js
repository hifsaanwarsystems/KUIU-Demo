/// <reference types="cypress"/>

export class shop
{
shopPage()
{
    cy.url().should('equal','https://www.kuiu.com/pages/shop')
    cy.get('.static-hero-image').should('be.visible')

    //going to pants page
    //cy.get(':nth-child(3) > .item-card > .item-card-info > .Product-Tile-Name').click({force:true})
    //cy.get(':nth-child(4) > .item-card > .item-card-info > .Product-Tile-Name').click({force:true})
    cy.visit('https://www.kuiu.com/collections/pants-shorts')
}

addingProducts()
{
//    cy.xpath("//div[@class='product-card product-card__tile gutters--half  product-card--collection ']").then($item=>{
//     var items=$item.length
//     cy.log(items)

//     for(let i=0;i<1;i++)
//     {
//         cy.get('.product-card__details > .flex > .product-card__details__title > span').eq(i).click({force:true})
//     }
// })
cy.get('[data-product-handle="womens-attack-pant-valo-camouflage"] > .product-card__wrapper > .product-card__image > .no-u > .product-card__image--primary > .lazyautosizes').scrollIntoView().click({force:true})
//cy.visit('https://www.kuiu.com/products/training-tech-short-steel-blue?variant=40536072519838')
cy.get('.product-app__action-pane__title').should('be.visible')
cy.get('.atc-button').click({force:true})
//cy.get('[data-product-handle="womens-attack-pant-valo-camouflage"] > .product-card__wrapper > .product-card__details > .flex > .product-card__details__title > span').click({force:true})
}
minicartverification()
{
    cy.get('#global-cart > .cart-toggle__count').should('have.text','1')
    cy.get('#global-cart-icon > svg').trigger('mouseover')
    
    cy.get('#global-cart-icon').click({force:true})
    cy.visit('https://www.kuiu.com/cart')
}
}