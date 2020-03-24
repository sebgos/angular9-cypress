it('smoke test', () => {
  cy.visit('/');
  cy.contains('angular9-cypress app is running!');
});
