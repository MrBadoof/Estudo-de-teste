/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Realizar download de um arquivo e verificar seu conteudo', () => {
    cy.contains('a', 'Download a text file').click();
    cy.readFile('cypress/downloads/example.txt').should(
      'be.equal',
      'Hello, World!'
    );
  });
});
