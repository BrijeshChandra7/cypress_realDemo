/// <reference types="cypress" />
import Sales from "../PageObjects/Sales";
import Login from "../PageObjects/Login";


describe('Sales',()=>{

    beforeEach(()=>{
        cy.fixture('Nopcommerce.json').as('Nopcommerce');
       // const baseUrl = Cypress.env("baseUrl");
     
       cy.get('@Nopcommerce').then((data)=>{
        let Nop = new Login();
        cy.log(data.baseUrl);
        cy.visit(data.baseUrl);

        cy.get('div.page-title').contains('Admin area demo');
        // Set Username
        Nop.setUserName(data.UserName);
        // Set Password
        Nop.setPassword(data.Password);
        // Login button
        Nop.clickLogin();
        cy.get(Nop.homeHeader).contains('Dashboard');
       })
        
    })

    it('ClickOnSalesMenu',()=>{

      let Nop = new Sales();
      // Click on Sales
      Nop.clickOnSales();
      cy.get(Nop.salesMenu).contains("Sales");

      // Click on Orders
      Nop.clickOnOrders();
      cy.get('.float-left').contains('Orders');

     // Nop.openSearchBar();
      cy.get(Nop.orderStatus).should('be.visible');

      //Select Order status
      Nop.selectOrderStatus('Complete');
      cy.get(Nop.orderStatus).contains('Complete');

      //Click on Search Button
      Nop.clickOnSearch();
      // Verify total orders present for the criteria
      Nop.totalFoundOrders(1);
    })

  /*  it('ClickOnOrdersMenu',()=>{

        let Nop = new Sales();
        Nop.clickOnOrders();
        
      }) */
})