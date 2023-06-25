describe("homeView", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.contains("h1", /home/i);
  });
});
