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
import './commands';
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
import '@4tw/cypress-drag-drop';

//Adding Custom command to click on button
Cypress.Commands.add('clickOnButton',(label)=>{
    cy.get('button').contains(label).click();
})

// cypress/support/commands.js
import Login from "../PageObjects/Login";


  Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      const baseUrl = Cypress.env("baseUrl");
      cy.visit(baseUrl);
      cy.get('#Email').clear().type(username);
      cy.get('#Password').clear().type(password);
      cy.get('button.login-button').click();
    })
  })

  Cypress.Commands.add('enterText',(selector, text) => {
    cy.get(selector).clear().type(text);
  })

  
  Cypress.Commands.add('clickElement',(selector) => {
    cy.get(selector).click();
  })

  Cypress.Commands.add('assertElementVisibility',(selector) => {
    cy.get(selector).should('be.visible');
  })

  Cypress.Commands.add('assertElementText',(selector,text) => {
    cy.get(selector).should('contain',text);
  })

  Cypress.Commands.add('selectDrop',(selector,text) => {
    cy.get(selector).select(text);
  })

  Cypress.Commands.add('logout',()=>{
    cy.get('a.nav-link').contains('Logout').click();
  })