describe('Mobile Navigation', () => {
  beforeEach(() => {
    // Set viewport to a mobile size
    cy.viewport('iphone-x');
    cy.visit('/');
    cy.wait(500);
  });

  it('should open the mobile menu and navigate to a page', () => {
    // The main desktop nav should not be visible
    cy.get('nav').should('not.be.visible');

    // Find and click the hamburger icon
    cy.get('button[aria-label="Open Menu"]').click();

    // The mobile menu container should be visible
    cy.get('.mobile-menu').should('be.visible');

    // Find the 'About' link within the mobile menu, check visibility, and click it
    cy.get('.mobile-menu').contains('a', 'About').should('be.visible').click();

    // After navigation, the URL should include '/about'
    cy.url().should('include', '/about');

    // The mobile menu should be closed on the new page
    cy.get('.mobile-menu').should('not.exist');
  });
});