class Login{

    txtUserName = "#Email";
    txtPassword = "#Password";
    btnLogin    = "button.login-button";
    errorMssg   = "div.validation-summary-errors";
    homeHeader  = "div.content-header";
    NullHeader  = "span#Email-error"; 
 LoginPageTitle = "div.page-title";

     setUserName(UserName){
        cy.assertElementVisibility(this.txtUserName);
        cy.enterText(this.txtUserName,UserName);
    }

     setPassword(Password){
        cy.assertElementVisibility(this.txtPassword);
        cy.enterText(this.txtPassword,Password);
    }

     clickLogin(){
        cy.assertElementVisibility(this.btnLogin);
        cy.clickElement(this.btnLogin);
    }
    
    verifyLoginPageTitle(message){
        cy.get(this.LoginPageTitle).contains(message);
    }

    verifyErrorMssgIncorrectCred(message){
        cy.get(this.errorMssg).contains(message);
    }

    verifyDashboardHeader(message){
        cy.get(this.homeHeader).contains(message);
    }

    verifyErrorMssgNullVal(message){
        cy.get(this.NullHeader).should('have.text',message);
    }

}
export default new Login();