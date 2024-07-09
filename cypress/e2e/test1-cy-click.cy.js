/// <reference types="cypress" />

describe('', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Realizar click em um button e verificar a mesagem de sucesso', () => {
    cy.contains('button', 'Subscribe').click();

    cy.contains(
      'span',
      "You've been successfully subscribed to our newsletter."
    ).should('be.visible');
  });
});
