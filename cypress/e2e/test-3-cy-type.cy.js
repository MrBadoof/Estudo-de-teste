/// <reference types="cypress" />

describe('', () => {
  const text = 'Não fui eu, j';

  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('Escrever texto em campo e verificar se ele foi destacado logo embaixo', () => {
    cy.get('#signature-textarea').type(text);
    cy.contains('em', text).should('be.visible');
  });
});
