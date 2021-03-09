describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'mockData.json'})
    cy.visit('http://localhost:3000/');
  })

  it('should have a title', () => {
    cy.get('h1').should('have.text', 'URL Shortener')
  })

  it('should have a form section with two inputs', () => {
    cy.get('form')
      .get('input')
      .should('have.length', 2)
  })

  it('should have a form section with a shorten please button', () => {
    cy.get('form')
      .get('button')
      .should('have.text', 'Shorten Please!')
  })

  it('should have a container with 3 shorten urls', () => {
    cy.get('.url').should('have.length', 3)
  })

})