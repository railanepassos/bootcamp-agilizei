// Aqui vamos colocar os passos comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
  cy.server()
  cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as(
    'getNewTable'
  )
  cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as(
    'postNewTable'
  )
  cy.route(
    'POST',
    '**/api/1/databases/userdetails/collections/usertable?**'
  ).as('postNewUser')

  cy.visit('/Register.html')
})
