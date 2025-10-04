describe('Mobile Navigation', () => {
  beforeEach(() => {
    // Set viewport to a mobile size
    cy.viewport('iphone-6');
    cy.visit('/');
  });

  it('should open the mobile menu and navigate to a page', () => {
    // The main nav should not be visible
    cy.get('nav').should('not.be.visible');

    // Find and click the hamburger icon
    cy.get('button[aria-label="Open Menu"]').click({ force: true });

    // The mobile menu should now be visible
    cy.contains('a', 'About').should('be.visible');

    // Click a link in the mobile menu
    cy.contains('a', 'About').click();
    cy.url().should('include', '/about');

    // The mobile menu should close after navigation
    cy.contains('a', 'About').should('not.be.visible');
  });
});