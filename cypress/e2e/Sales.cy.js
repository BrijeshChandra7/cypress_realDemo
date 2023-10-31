/// <reference types="cypress" />
import Sales from "../PageObjects/Sales";
import Login from "../PageObjects/Login";

describe("Sales", () => {
  beforeEach(() => {
    
    cy.fixture("Nopcommerce.json").as("Nopcommerce");
    cy.get("@Nopcommerce").then((data) => {
      cy.login(data.UserName, data.Password);
    });
  
    cy.visit(Cypress.env('baseUrl'));
    
  });

  it("ClickOnSalesMenu", () => {
    

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

});
