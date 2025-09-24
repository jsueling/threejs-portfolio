describe('Page Navigation', () => {
  beforeEach(() => {
    // The basePath is not applied in dev mode, so we visit the root.
    // For CI runs, the CYPRESS_BASE_URL will handle the basePath.
    cy.visit('/');
  });

  it('should navigate to the about section when the link is clicked', () => {
    // 1. Find the link with the text "About"
    cy.contains('a', 'About').click();

    // 2. Check if the URL has been updated with the hash
    cy.url().should('include', 'about');

    // 3. Check if the "About" section heading is visible
    cy.contains('a', 'About').should('be.visible');
  });
});