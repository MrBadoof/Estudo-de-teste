/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Realizar click em um button e verificar a mesagem de sucesso', () => {
    cy.contains('button', 'Subscribe').click();

    cy.get('#success')
      .should(
        'contain',
        "You've been successfully subscribed to our newsletter."
      )
      .and('be.visible');
  });
});
