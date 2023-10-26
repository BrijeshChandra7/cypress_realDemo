/// <reference types="cypress" />
import Login from "../PageObjects/Login.js";

describe("Login", () => {
  beforeEach(() => {
    cy.fixture("Nopcommerce.json").as("Nopcommerce");
    // const baseUrl = Cypress.env("baseUrl");
    cy.get("@Nopcommerce").then((data) => {
      cy.log(data.baseUrl);
      cy.visit(data.baseUrl);
      Login.verifyLoginPageTitle("Admin area demo");
    });
  });
  it("Incorrect Username", () => {
    // let Nop = new Login();

    cy.get("@Nopcommerce").then((data) => {
      Login.setUserName(data.IncUserName);
      Login.setPassword(data.Password);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred(
        "Login was unsuccessful. Please correct the errors and try again."
      );
    });
  });

  it("Incorrect Password", () => {
    //let Nop = new Login();

    cy.get("@Nopcommerce").then((data) => {
      Login.setUserName(data.UserName);
      Login.setPassword(data.IncPassword);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred(
        "Login was unsuccessful. Please correct the errors and try again."
      );
    });
  });

  it("Incorrect Username Incorrect Password", () => {
    //  let Nop = new Login();

    cy.get("@Nopcommerce").then((data) => {
      Login.setUserName(data.IncUserName);
      Login.setPassword(data.IncPassword);
      Login.clickLogin();
      Login.verifyErrorMssgIncorrectCred(
        "Login was unsuccessful. Please correct the errors and try again."
      );
    });
  });

  it("Correct Username Correct Password", () => {
    // let Nop = new Login();

    cy.get("@Nopcommerce").then((data) => {
      Login.setUserName(data.UserName);
      Login.setPassword(data.Password);
      Login.clickLogin();
      Login.verifyDashboardHeader("Dashboard");
    });
  });

  it("Null value and incorrect format ", () => {
    // let Nop = new Login();

    cy.get("@Nopcommerce").then((data) => {
      Login.setUserName(" ");
      Login.setPassword(" ");
      Login.clickLogin();
      Login.verifyErrorMssgNullVal("Please enter your email");
    });
  });
});
