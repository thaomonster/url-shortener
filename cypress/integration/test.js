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
    cy.request('POST', 'http://localhost:3001/api/v1/urls', {
      title: 'Dinosaur', 
      long_url: 'https://unsplash.com/photos/hYKG311mff8',
      id: 4,
      short_url: 'http://localhost:3001/useshorturl/6'
      }
    ).as('post')

    cy.visit('http://localhost:3000/')
  })

  it('should be able to test user integration', () => {
    cy.get('[placeholder="Title..."]')
      .type('Awkward Turtle')
      .get('[placeholder="URL to Shorten..."]')
      .type('https://unsplash.com/photos/Bv8ew2s-f4A')
      .get('button')
      .click()
      .get('section > :nth-child(4) > h3')
      .should('have.text', 'Awkward Turtle')
  })

  it('should be able to post a new url', () => {
    cy.get('@post').should('have.property', 'status', 201)
    cy.get('@post').should((response) => {
      expect(response.body).to.have.property('title', 'Dinosaur')
      expect(response.body).to.have.property('long_url', 'https://unsplash.com/photos/hYKG311mff8')
    })
  });
})
