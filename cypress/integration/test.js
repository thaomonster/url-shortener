describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'mockData.json'})
    cy.visit('http://localhost:3000/')
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

  it('should on each card have a title', () => {
    cy.get(':nth-child(1) > h3').should('have.text', 'Test 1')
  })

  it('should on each card have a shorten url link', () => {
    cy.get(':nth-child(2) > a')
      .should('have.text', 'http://localhost:3001/useshorturl/2')
  })

  it('should on each card have a long url', () => {
    cy.get(':nth-child(3) > p')
      .should('have.text', 'https://unsplash.com/photos/WE7YfTGpXlg')
  })
})

describe('UrlForm', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'mockData.json'})


    cy.visit('http://localhost:3000/')
  })

 

})
