describe('Home Page', () => {
  it('should load the home page and display the main heading', () => {
    // The basePath in next.config.js is not applied in dev mode
    cy.visit('/')
    cy.contains('h1', 'Hi,').should('be.visible')
    cy.contains('h1', 'My name is James').should('be.visible')
  })
})