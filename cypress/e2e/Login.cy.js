/// <reference types="cypress" />
import Login from "../PageObjects/Login.js";

describe('Login',()=>{

beforeEach(()=>{
    cy.fixture('Nopcommerce.json').as('Nopcommerce');
   // const baseUrl = Cypress.env("baseUrl");
   cy.get('@Nopcommerce').then((data)=>{

    cy.log(data.baseUrl);
    cy.visit(data.baseUrl);
    cy.get('div.page-title').contains('Admin area demo');
   })
    
})
    it('Incorrect Username',()=>{
        let Nop = new Login();

    cy.get('@Nopcommerce').then((data)=>{

    
        Nop.setUserName(data.IncUserName);
        Nop.setPassword(data.Password);
        Nop.clickLogin();
        cy.get(Nop.errorMssg).contains('Login was unsuccessful. Please correct the errors and try again.');

    })

})

it('Incorrect Password',()=>{
    let Nop = new Login();

cy.get('@Nopcommerce').then((data)=>{


    Nop.setUserName(data.UserName);
    Nop.setPassword(data.IncPassword);
    Nop.clickLogin();
    cy.get(Nop.errorMssg).contains('Login was unsuccessful. Please correct the errors and try again.');

})

})

it('Incorrect Username Incorrect Password',()=>{
    let Nop = new Login();

cy.get('@Nopcommerce').then((data)=>{


    Nop.setUserName(data.IncUserName);
    Nop.setPassword(data.IncPassword);
    Nop.clickLogin();
    cy.get(Nop.errorMssg).contains('Login was unsuccessful. Please correct the errors and try again.');

})

})

it('Correct Username Correct Password',()=>{
    let Nop = new Login();

cy.get('@Nopcommerce').then((data)=>{


    Nop.setUserName(data.UserName);
    Nop.setPassword(data.Password);
    Nop.clickLogin();
    cy.get(Nop.homeHeader).contains('Dashboard');

})

})


})