// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

Cypress.Commands.add('addcardno',()=>{
   return cy.get('iframe[title="Field container for: Card number"]').should('be.visible').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)
})
Cypress.Commands.add('addcardname',()=>{
   return cy.get('iframe[title="Field container for: Name on card"]').should('be.visible').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)
})
Cypress.Commands.add('addexpirationdate',()=>{
   return cy.get('iframe[title="Field container for: Expiration date (MM / YY)"]').should('be.visible').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)
})
Cypress.Commands.add('addcccode',()=>{
   return cy.get('iframe[title="Field container for: Security code"]').should('be.visible').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap)
})