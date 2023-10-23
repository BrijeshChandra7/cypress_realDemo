class Login{

    txtUserName = "#Email";
    txtPassword = "#Password";
    btnLogin    = "button.login-button";
    errorMssg   = "div.validation-summary-errors";
    homeHeader      = "div.content-header";

     setUserName(UserName){
        cy.get(this.txtUserName).clear().type(UserName);
    }

     setPassword(Password){
        cy.get(this.txtPassword).clear().type(Password);
    }

     clickLogin(){
        cy.get(this.btnLogin).click();
    }

}
export default Login;