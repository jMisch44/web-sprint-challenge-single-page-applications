describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const orderPizzaLink = () => cy.get("[data-cy=order-pizza]");
  const nameInput = () => cy.get("input[id='name-input']");
  const cheeseCheck = () => cy.get("input[name='cheese']");
  const pepperoniCheck = () => cy.get("input[name='pepperoni']");
  const onionCheck = () => cy.get("input[name='onion']");
  const sausageCheck = () => cy.get("input[name='sausage']");
  const submitBtn = () => cy.get("button[id='order-button']");
  const specialInput = () => cy.get("input[id='special-text']");

  it("Sanity check to make sure that the tests are working", () => {
    expect(1 + 1).to.equal(2);
    expect(2 + 1).not.to.equal(4);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  describe("Navigating to form page to check elements and inputs", () => {
    it("Can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });

    it("Can navigate to the form page", () => {
      orderPizzaLink().click();
    });

    it("The proper elements are showing", () => {
      orderPizzaLink().click();
      nameInput().should("exist");
      cheeseCheck().should("exist");
      pepperoniCheck().should("exist");
      onionCheck().should("exist");
      sausageCheck().should("exist");
      submitBtn().should("exist");
      specialInput().should("exist");
    });

    it("test that you can add text to the box", () => {
      orderPizzaLink().click();

      nameInput()
        .should("have.value", "")
        .type("Qwerty")
        .should("have.value", "Qwerty");

      specialInput()
        .should("have.value", "")
        .type("No")
        .should("have.value", "No");
    });

    it("test that you can select multiple toppings", () => {
      orderPizzaLink().click();

      cheeseCheck().should("not.be.checked").check().should("be.checked");
      pepperoniCheck().should("not.be.checked").check().should("be.checked");
      onionCheck().should("not.be.checked").check().should("be.checked");
      sausageCheck().should("not.be.checked").check().should("be.checked");
    });
  });
  describe("Checking that you can submit the form", () => {
    it("test that you can submit the form", () => {
      orderPizzaLink().click();

      nameInput().type("Qwerty");
      cheeseCheck().check();
      pepperoniCheck().check();
      submitBtn().click();
      cy.contains("Qwerty");
    });
  });
});
