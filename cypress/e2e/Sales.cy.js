/// <reference types="cypress" />
import Sales from "../PageObjects/Sales";
import Login from "../PageObjects/Login";

describe("Sales", () => {
  beforeEach(() => {
    /* cy.fixture('Nopcommerce.json').as('Nopcommerce');
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
        cy.get(Nop.homeHeader).contains('Dashboard');   */
    cy.fixture("Nopcommerce.json").as("Nopcommerce");
    cy.get("@Nopcommerce").then((data) => {
      cy.login(data.UserName, data.Password);
    });
  });

  it("ClickOnSalesMenu", () => {
    //let Nop = new Sales();

    // Click on Sales
    Sales.clickOnSales();
    Sales.verifySalesMenu("Sales");

    // Click on Orders
    Sales.clickOnOrders();
    Sales.verifyOrdersLabel("Orders");

    // Nop.openSearchBar();
    Sales.verifyVisibilityOfOrderStatus();

    //enter start date in Order
    Sales.enterOrderStartDt("03/13/2017");

    //Select Order status
    Sales.selectOrderStatus("Complete");
    Sales.verifyContentOfOrderStatus("Complete");

    //Click on Search Button
    Sales.clickOnSearch();

    // Verify total orders present for the criteria
    Sales.verifyTotalFoundOrders(1);

    cy.get("@Nopcommerce").then((data) => {
      //enter start date in Order
      Sales.enterOrderStartDt(data.CorrectStartDate);

      // Select Vendor dropdown
      Sales.selectVendor("All");

      //Select Order status
      Sales.selectOrderStatus(data.OrderStatus);

      // Verify Order Status
      Sales.verifyContentOfOrderStatus("Pending");

      // Select Payment Status
      Sales.selectPaymentStatus(data.PaymentStatus);

      // Verify Payment Status
      Sales.verifyContentOfPaymentStatus(data.PaymentStatus);

      // Select Shipping status
      Sales.selectShippingStatus(data.ShippingStatus);

      // Verify Shipping status
      Sales.verifyContentOfShippingStatus(data.ShippingStatus);

      // Enter Billing Email
      Sales.enterBillingEmail("james_pan@nopCommerce.com");

      //Click on Search Button
      Sales.clickOnSearch();

      // Verify total orders present for the criteria
      Sales.verifyTotalFoundOrders(1);

      cy.logout();

      Login.verifyLoginPageTitle("Admin area demo");
    });
  });

  /*  it('ClickOnOrdersMenu',()=>{

        let Nop = new Sales();
        Nop.clickOnOrders();
        
      }) */
});
