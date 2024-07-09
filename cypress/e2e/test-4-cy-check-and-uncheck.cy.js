/// <reference types="cypress" />

describe('', () => {
  const text = 'Não fui eu, j';

  beforeEach(() => {
    cy.visit('/index.html');
  });
  context('Utilizando checkbox', () => {
    beforeEach(() => {
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

  context('Utilizando radio', () => {
    it('Seleciona a opção "on" do radio', () => {
      cy.get('#on').check();
      cy.contains('p', 'ON').should('be.visible');
    });
    it('Seleciona a opção "off" do radio', () => {
      cy.get('#off').check();
      cy.contains('p', 'OFF').should('be.visible');
    });
  });
});
