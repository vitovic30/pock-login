// @ts-ignore:next-line
/// <reference types="Cypress" />

describe('Platform navigation user history', () => {
  before(() => {
    Cypress.on('uncaught:exception', () => { return false })
    cy.visit(Cypress.env('baseUrl'))
  })
  it('Action of fill in user and password', () => {
    cy.get('[data-cy=inputEmail]').type('vi_dualcore@hotmail.com', 'text')
    cy.get('[data-cy=inputPassword]').type('dualcore', 'password')
    cy.get('[data-cy=submitLogin]').click()
  })

  it('Access page dashboard after login', () => {
    cy.get('[data-cy=nuxt-link]').should('be.exist').should(($el) => {
      expect($el.text()).to.includes('Logout Application')
    })
    cy.wait(2000)
    cy.get('[data-cy=nuxt-link]').click()
  })
})
