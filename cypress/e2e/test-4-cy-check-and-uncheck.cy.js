/// <reference types="cypress" />

describe('example to-do app', () => {
  const text = 'Não fui eu, j';

  beforeEach(() => {
    cy.visit('/index.html');

    cy.get('#signature-textarea-with-checkbox').type(text);
    cy.get('#signature-checkbox').check();
  });

  it('Escrever texto em campo, clicar em um checkbox e verificar se ele foi destacado logo embaixo', () => {
    cy.contains('em', text).should('be.visible');
  });
  it('Escrever texto em campo, clicar em um checkbox, verificar se ele foi destacado logo embaixo e ao realizar o uncheck o texto some', () => {
    cy.contains('em', text).should('be.visible');
    cy.get('#signature-checkbox').uncheck();
    cy.contains('em', text).should('not.exist');
  });
});
