class Sales{

    salesMenu   = ".nav-pills > :nth-child(3) > [href='#']"; 
    salesMenu1  = ".nav-pills > :nth-child(3) > [href='#']";
    ordersMenu  = "a[href='/Admin/Order/List']";
    searchBar   = "i.fa-angle-down";
    orderStatus = ":nth-child(5) > .col-md-8 > .k-widget > .k-multiselect-wrap";
    btnSearch   = "button.btn.btn-primary.btn-search";
    orderStatDrop= "#OrderStatusIds_listbox li";
        

     clickOnSales(){
        cy.get(this.salesMenu).click();  // click on Sales menu 
        cy.wait(200); 
        cy.get(this.salesMenu).click(); // Click on sales menu open full Sales
    }

    clickOnOrders(){
        cy.wait(200); 
        cy.get(this.ordersMenu).eq(0).click();
    }
    openSearchBar(){
        cy.get(this.searchBar).click();
    }

    selectOrderStatus(status){
        cy.get(this.orderStatus).click();
        cy.get(this.orderStatDrop).contains(status).click();
    }

    clickOnSearch(){
        cy.get(this.btnSearch).click();
    }

    

}
export default Sales;