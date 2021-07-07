let Chance = require('chance')
let chance = new Chance()

Given(/^que o site não possui registros$/, () => {
  cy.server()
  cy.route({
    method: 'GET',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: 'fx:webtable-get-empty'
  }).as('getNewTable')
})

When(/^acessar a listagem$/, () => {
  cy.visit('/WebTable.html')
})

Then(/^devo visualizar a listagem vazia$/, () => {
  cy.get('div[role=row]').should('have.length', 1)
})

Given(/^que o site possui apénas um registro$/, () => {
  cy.server()
  cy.route({
    method: 'GET',
    url: '**/api/1/databases/userdetails/collections/newtable?**',
    status: 200,
    response: 'fx:webtable-get-only'
  }).as('getNewTable')
})

Then(/^devo visualizar apénas um registro$/, () => {
  cy.get('div[role=row] div[role=gridcell')
    .eq(4)
    .find('div')
    .as('gridCellPhone')
  cy.get('div[role=row]').should('have.length', 2)
  cy.get('@gridCellPhone').should('contain', '0106926593')
})
