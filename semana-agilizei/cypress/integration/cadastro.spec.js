/// <reference types="cypress" />

//  Importando para nosso projeto a biblioteca Chance para geração de dados aleatórios.
//  Isso irá nos ajudar no cadastro dentro da plataforma
let Chance = require('chance')
let chance = new Chance()

context('Cadastro', () => {
  it('Cadastro de usuario no site', () => {
    //  Aqui acessa a rota que direciona a pagina de registro, ou seja, baseUrl + route
    cy.visit('/Register.html')

    //  type -> escreve em um campo
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model*=Last]').type(chance.last())
    cy.get('textarea[ng-model="Adress"]').type(chance.address())
    cy.get('input[ng-model="EmailAdress"]').type(chance.email())
    cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false }))

    //  check -> radio's e checkboxes
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
    cy.get('input#firstpassword').type('Javascript-99')
    cy.get('input#secondpassword').type('Javascript-99')
    cy.get('button#submitbtn').click()
    //  cy.get('button#Button1').click()
  })
  it('Reset register form', () => {
    cy.visit('/Register.html')
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model*=Last]').type(chance.last())
    cy.get('textarea[ng-model="Adress"]').type(chance.address())
    cy.get('input[ng-model="EmailAdress"]').type(chance.email())
    cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false }))
    cy.get('input[value="Male"]').check()
    //cy.get('input[value="FeMale"]').check()
    cy.get('input[type=checkbox]').check('Movies')
    cy.get('input[type=checkbox]').check('Cricket')
    //cy.get('input[type=checkbox]').check('Hockey')
    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Australia')
    cy.get('select#country').select('Bangladesh', { force: true })
    cy.get('select#yearbox').select('1933')
    cy.get('select[ng-model="monthbox"]').select('June')
    cy.get('select#daybox').select('13')
    cy.get('input#firstpassword').type('Javascript-99')
    cy.get('input#secondpassword').type('Javascript-99')

    //  Button reset
    cy.get('button#Button1').click()

    // Reset validate
  })
})
