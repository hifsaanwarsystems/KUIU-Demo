/// <reference types="cypress"/>
  
import {account} from './account'
import { shop } from './shop'
import { checkout} from './checkout'
const getvalue=require('../fixtures/account.json')
const shippingdata=require('../fixtures/shipping.json')
describe('KUIU Demo', () => {
  const acc=new account()
  const shoppage=new shop()
  const checkouttemp=new checkout()
  beforeEach(()=>{
    cy.viewport(1400, 1200)
  })
  it('Visiting Site', () => {
    cy.visit('https://www.kuiu.com/')
  })
  it('Registered User Login',()=>{
   acc.login(getvalue.email,getvalue.password)
   acc.myaccount()
  })
  it('Adding Products to cart',()=>{
    shoppage.shopPage()
    acc.login(getvalue.email,getvalue.password)
    acc.myaccount()
    shoppage.shopPage()
    shoppage.addingProducts()
   shoppage.minicartverification()
      checkouttemp.cartPage()
    checkouttemp.checkout()
    checkouttemp.shipping(shippingdata.company,shippingdata.addresss,shippingdata.apartment,shippingdata.city,shippingdata.zipcode,shippingdata.phone)
    checkouttemp.shippingconfirmation()
    checkouttemp.paymentPage()
  })
 
})