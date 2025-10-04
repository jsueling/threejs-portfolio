describe('Page Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the About page when the link is clicked', () => {
    cy.contains('nav a', 'About').click();
    cy.url().should('include', '/about');
    // Check for a heading on the about page instead of the link
    cy.get('h1').should('contain', 'About'); 
  });

  it('should navigate to the Projects page when the link is clicked', () => {
    cy.contains('nav a', 'Projects').click();
    cy.url().should('include', '/projects');
    cy.get('h1').should('contain', 'Projects');
  });

  it('should open the Explore overlay when the button is clicked', () => {
    // The "Explore" button is in the NavBar
    cy.get('nav').contains('Explore').click();
    // The Explore component should be visible
    cy.contains('Hold left click to rotate').should('be.visible');
    // The NavBar should be hidden
    cy.get('nav').should('not.exist');
  });
});