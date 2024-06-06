/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Realizar download de um arquivo e verificar seu conteudo', () => {
    cy.get('#signature-textarea').type('Eu disse que esta aqui!');
    cy.get('#signature').should('contain', 'Eu disse que esta aqui!');
  });
});
