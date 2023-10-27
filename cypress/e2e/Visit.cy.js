/// <reference types="cypress" />
import Sales from "../PageObjects/Sales";
import Login from "../PageObjects/Login";

describe("Visit using env.json",()=>{

    it("visit",()=>{
        const baseUrl = Cypress.env("baseUrl");
        cy.visit(baseUrl);
    })

})