describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //helpers

  it("Sanity check to make sure that the tests are working", () => {
    expect(1 + 1).to.equal(2);
    expect(2 + 1).not.to.equal(4);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });
});
