/// <reference types="cypress" />

describe("API test",()=>{

    beforeEach("Login and GET cy.request",()=>{
        
        cy.visit(Cypress.env('baseUrl'));
        cy.fixture('Nopcommerce.json').as('File');
    })

    it("GET call Response code",()=>{
        cy.request('GET',Cypress.env('baseUrl')).as('site');
        //cy.get('@site').should((response) => {
           // expect(response.status).to.equal(200);
        cy.get('@site').its('status').should('eq',200);
    })

    it("Post",()=>{
      // Define the login credentials
      const loginData = {
        username: 'admin@yourstore.come',
        password: 'admin',
      };
      

  // Make a POST request to the login API
  cy.request({
    method: 'POST',
    url: Cypress.env('baseUrl'), // Use the correct API endpoint
    form: true, // This indicates that the payload is form data
    body: loginData, // The login credentials
  }).then((response) => {
    // Assertions or checks on the response
    if (response.status === 200) {
      // The login was successful
      // You may want to check for a successful login response or a redirect to a dashboard.
    } else {
      // The login failed
      // You may want to check for error messages or other indicators of a failed login attempt.
    }
  });
  
    })

    it('Put',()=>{

        const loginData = {
            username: 'admin@yourstore.come',
            password: 'admin',
          };
          
    
      // Make a POST request to the login API
      cy.request({
        method: 'PUT',
        url: Cypress.env('baseUrl'), // Use the correct API endpoint
        form: true, // This indicates that the payload is form data
        body: loginData, // The login credentials
      }).then((response) => {
        // Assertions or checks on the response
        if (response.status === 200) {
          // The login was successful
          // You may want to check for a successful login response or a redirect to a dashboard.
        } else {
          // The login failed
          // You may want to check for error messages or other indicators of a failed login attempt.
        }
      });

    })
})
