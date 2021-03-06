/// <reference types="cypress" />

context('Listagem', () => {
  it('Listagem sem registros', () => {
    cy.server()
    //  GET --- /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    // Abaixo podemos validar qualquer status da aplicação sem precisar derrubar a API
    cy.route({
      method: 'GET',
      url: '**/api/1/databases/userdetails/collections/newtable?**',
      status: 200,
      response: 'fx:webtable-get-empty'
    }).as('getNewTable')

    cy.visit('/WebTable.html')

    // Validando se a lista está realmente vazia
    cy.get('div[role=row]').should('have.length', 1)
  })
  it('Listagem com apenas um registro', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '**/api/1/databases/userdetails/collections/newtable?**',
      status: 200,
      response: 'fx:webtable-get-only'
    }).as('getNewTable')

    cy.visit('/WebTable.html')
    //  Validando iten na tabela
    cy.get('div[role=row] div[role=gridcell')
      .eq(4)
      .find('div')
      .as('gridCellPhone')
    cy.get('@gridCellPhone').should('contain', '0106926593')
  })
})
