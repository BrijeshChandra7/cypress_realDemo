class Sales {
  salesMenu = ".nav-pills > :nth-child(3) > [href='#']";
  salesMenu1 = ".nav-pills > :nth-child(3) > [href='#']";
  ordersMenu = "a[href='/Admin/Order/List']";
  searchBar = "i.fa-angle-down";
  orderStatus = ":nth-child(5) > .col-md-8 > .k-widget > .k-multiselect-wrap";
  btnSearch = "button.btn.btn-primary.btn-search";
  orderStatDrop = "#OrderStatusIds_listbox li";
  ortotalOrders = "#orders-grid tbody tr";
  orstartDate = "input#StartDate";
  labelOrder = ".float-left";
  orVendorDrop = "select#VendorId";
  orEndDate = "input#EndDate";
  orWarehouseDrop = "select#WarehouseId";
  ortxtProduct = "input#search-product-name";
  orPaymentStatus =
    ":nth-child(6) > .col-md-8 > .k-widget > .k-multiselect-wrap";
  orPaymentStatusDrop = "ul#PaymentStatusIds_listbox li";
  orShippingStatus =
    ":nth-child(7) > .col-md-8 > .k-widget > .k-multiselect-wrap";
  orShippingStatusDrop = "ul#ShippingStatusIds_listbox";
  ortxtBillingPhoneNumber = "input#BillingPhone";
  ortxtBillingEmail = "input#BillingEmail";
  ortxtBillingLastName = "input#BillingLastName";
  orBillingCountryDrop = "BillingCountryId";
  orPaymentMethodDrop = "select#PaymentMethodSystemName";
  ortxtOrderNotes = "input#OrderNotes";
  ortxtGoDirectlyToOrders = "input#GoDirectlyToCustomOrderNumber";
  orbtnGoDirectlyToOrders = "button#go-to-order-by-number";

  clickOnSales() {
    cy.assertElementVisibility(this.salesMenu);
    cy.clickElement(this.salesMenu,); // click on Sales menu
    cy.wait(200);
    cy.clickElement(this.salesMenu); // Click on sales menu open full Sales
  }

  clickOnOrders() {
    cy.wait(200);
    cy.assertElementVisibility(this.ordersMenu);
    cy.get(this.ordersMenu).eq(0).click();
  }

  openSearchBar() {
    cy.assertElementVisibility(this.searchBar);
    cy.clickElement(this.searchBar);
  }

  selectOrderStatus(status) {
    cy.assertElementVisibility(this.orderStatus);
    cy.clickElement(this.orderStatus);
    cy.get(this.orderStatDrop).contains(status).click();
  }

  clickOnSearch() {
    cy.assertElementVisibility(this.btnSearch);
    cy.clickElement(this.btnSearch);
  }

  verifyTotalFoundOrders(data) {
    cy.get(this.ortotalOrders).should("have.length", data);
  }

  enterOrderStartDt(date) {
    cy.assertElementVisibility(this.orstartDate);
    cy.enterText(this.orstartDate, date);
  }

  verifySalesMenu(message) {
    cy.get(this.salesMenu).contains(message);
  }

  verifyOrdersLabel(message) {
    cy.get(this.labelOrder).contains(message);
  }

  verifyVisibilityOfOrderStatus() {
    cy.get(this.orderStatus).should("be.visible");
  }

  verifyContentOfOrderStatus(message) {
    cy.get(this.orderStatus).contains(message);
  }

  selectVendor(data) {
    cy.selectDrop(this.orVendorDrop, data);
  }

  enterOrderEndDate(date) {
    cy.assertElementVisibility(this.orEndDate);
    cy.enterText(this.orEndDate, date);
  }

  selectWarehouse(value) {
    cy.assertElementVisibility(this.orWarehouseDrop);
    cy.selectDrop(this.orWarehouseDrop, value);
  }

  enterProduct(text) {
    cy.assertElementVisibility(this.ortxtProduct);
    cy.enterText(this.ortxtProduct, text);
  }

  selectPaymentStatus(data) {
    cy.assertElementVisibility(this.orPaymentStatus);
    cy.clickElement(this.orPaymentStatus);
    cy.get(this.orPaymentStatusDrop).contains(data).click();
  }

  verifyContentOfPaymentStatus(data) {
    cy.assertElementText(this.orPaymentStatus, data);
  }

  selectShippingStatus(data) {
    cy.assertElementVisibility(this.orShippingStatus);
    cy.clickElement(this.orShippingStatus);
    cy.get(this.orShippingStatusDrop).contains(data).click();
  }

  verifyContentOfShippingStatus(data) {
    cy.assertElementText(this.orShippingStatusDrop, data);
  }

  enterBillingPhoneNumber(Number) {
    cy.assertElementVisibility(this.ortxtBillingPhoneNumber);
    cy.enterText(this.ortxtBillingPhoneNumber, Number);
  }

  enterBillingEmail(Email) {
    cy.assertElementVisibility(this.ortxtBillingEmail);
    cy.enterText(this.ortxtBillingEmail, Email);
  }

  enterBillingLastName(LastName) {
    cy.assertElementVisibility(this.ortxtBillingLastName);
    cy.enterText(this.ortxtBillingLastName, LastName);
  }

  selectBillingCountry(Country) {
    cy.assertElementVisibility(this.orBillingCountryDrop);
    cy.selectDrop(this.orBillingCountryDrop, Country);
  }
  verifyContentOfBillingCountry(data) {
    cy.assertElementText(this.orBillingCountryDrop, data);
  }

  selectPaymentMethod(data) {
    cy.assertElementVisibility(this.orPaymentMethodDrop);
    cy.selectDrop(this.orPaymentMethodDrop, data);
  }
  verifyContentOfPaymentMethod(data) {
    cy.assertElementText(this.orPaymentMethodDrop, data);
  }

  enterOrderNotes(order) {
    cy.assertElementVisibility(this.ortxtOrderNotes);
    cy.enterText(this.ortxtOrderNotes, order);
  }

  enterGoDirectlyToOrder(data) {
    cy.assertElementVisibility(this.ortxtGoDirectlyToOrders);
    cy.enterText(this.ortxtGoDirectlyToOrders, data);
  }

  clickOnGoDirectlyToOrder() {
    cy.assertElementVisibility(this.orbtnGoDirectlyToOrders);
    cy.clickElement(this.orbtnGoDirectlyToOrders);
  }
}
export default new Sales();
