describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has app title, shows proper command by default and reacts on a command changes', () => {
    cy.contains('angular9-cypress');

    cy.contains('.terminal', 'ng generate component xyz');

    cy.contains('Angular Material').click();
    cy.contains('.terminal', 'ng add @angular/material');

    cy.contains('Run and Watch Tests').click();
    cy.contains('.terminal', 'ng test');
  });
});
