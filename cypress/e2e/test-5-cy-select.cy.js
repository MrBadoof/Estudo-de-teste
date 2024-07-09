/// <reference types="cypress" />

describe('', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  context('Verificando todas as opções do campo de seleção', () => {
    it('Selecionado a opção "Basic"', () => {
      cy.get('#selection-type').select('Basic');
      cy.contains('strong', 'BASIC').should('be.visible');
    });
    it('Selecionado a opção "Standard"', () => {
      cy.get('#selection-type').select('Standard');
      cy.contains('strong', 'STANDARD').should('be.visible');
    });
    it('Selecionado a opção "VIP"', () => {
      cy.get('#selection-type').select('VIP');
      cy.contains('strong', 'VIP').should('be.visible');
    });
  });

  context('Verificando a seleção de multiplas opções', () => {
    it('Selecionado uma opção "banana"', () => {
      cy.get('#fruit[multiple]').select('banana');
      cy.contains('strong', 'banana').should('be.visible');
    });
    it('Selecionado duas opções "apple, cherry"', () => {
      cy.get('#fruit[multiple]').select(['apple', 'cherry']);
      cy.contains('strong', 'apple, cherry').should('be.visible');
    });
    it('Selecionado todas as opções "apple, banana, cherry, date, elderberry"', () => {
      cy.get('#fruit[multiple]').select([
        'apple',
        'banana',
        'cherry',
        'date',
        'elderberry'
      ]);
      cy.contains('strong', 'apple, banana, cherry, date, elderberry').should(
        'be.visible'
      );
    });
  });
});
