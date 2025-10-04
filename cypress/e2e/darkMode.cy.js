describe('Dark Mode Toggle', () => {
  it('should toggle dark mode on and off', () => {
    cy.visit('/');

    // Check for initial light mode (body tag does not have 'dark' class)
    cy.get('body').should('not.have.class', 'dark');

    // Find and click the dark mode toggle button
    cy.get('button[aria-label="Toggle dark mode"]').click({ force: true });

    // Assert that dark mode is enabled
    cy.get('body').should('have.class', 'dark');

    // Click again to disable
    cy.get('button[aria-label="Toggle dark mode"]').click({ force: true });
    cy.get('body').should('not.have.class', 'dark');
  });
});