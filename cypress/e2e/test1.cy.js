/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(
      "https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html",
    );
  });

  it("test", () => {
    cy.get('button[type="submit"]').click();

    cy.get("#success")
      .should(
        "contain",
        "You've been successfully subscribed to our newsletter.",
      )
      .and("be.visible");
  });

  it("", () => {});
});
