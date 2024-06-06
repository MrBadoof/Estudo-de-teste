/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('test', () => {
    cy.get('button[type="submit"]').click();

    cy.get('#success')
      .should(
        'contain',
        "You've been successfully subscribed to our newsletter."
      )
      .and('be.visible');
  });

  it.only('test-2, realizar download de um arquivo e verificar seu conteudo', () => {
    cy.contains('a', 'Download a text file').click();
    cy.readFile('cypress/downloads/example.txt').should(
      'be.equal',
      'Hello, World!'
    );
  });
});
