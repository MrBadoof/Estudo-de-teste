/// <reference types="cypress" />

describe('', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Escrever texto em campo e verificar se ele foi destacado logo embaixo', () => {
    cy.get('#file-upload').selectFile(
      'cypress/fixtures/selectFile-exemplo.json'
    );
    cy.contains('strong', 'selectFile-exemplo.json').should('be.visible');
  });
});
