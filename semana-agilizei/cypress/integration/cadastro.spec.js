/// <reference types="cypress" />

context('Cadastro', () => {
  it('Cadastro de usuario no site', () => {
    //  Aqui acessa a rota que direciona a pagina de registro, ou seja, baseUrl + route
    cy.visit('/Register.html')

    //  type -> escreve em um campo
    cy.get('input[placeholder="First Name"]').type('Teste')
    cy.get('input[ng-model*=Last]').type('teste')
    cy.get('textarea[ng-model="Adress"]').type('Rua vital')
    cy.get('input[ng-model="EmailAdress"]').type('teste@teste.com')
    cy.get('input[ng-model="Phone"]').type('71988776767')

    //  check -> radio's e checkboxes
    //  Selection gender
    //  cy.get('input[value="Male"]').check();
    cy.get('input[value="FeMale"]').check()
    //  Selection hobbies
    cy.get('input[type=checkbox]').check('Cricket')
    //  cy.get('input[type=checkbox]').check('Movies')
    cy.get('input[type=checkbox]').check('Hockey')

    //  select -> select e select2(combos)
    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Australia')

    //  O force:true é usado quando nosso elemento está oculto no html, que é o caso do elemento select#coutry
    cy.get('select#country').select('Bangladesh', { force: true })

    cy.get('select#yearbox').select('1933')
    cy.get('select[ng-model="monthbox"]').select('June')
    cy.get('select#daybox').select('13')
    cy.get('input#firstpassword').type('Javascript')
    cy.get('input#secondpassword').type('Javascript')
    cy.get('button#submitbtn').click()
    //  cy.get('button#Button1').click()
  })
})
