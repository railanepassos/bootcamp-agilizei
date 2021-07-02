// Implementação de passos descritos nas features
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let Chance = require('chance')
let chance = new Chance()

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

When(/^informar meus dados$/, () => {
  cy.get('input[placeholder="First Name"]').type(chance.first())
  cy.get('input[ng-model*=Last]').type(chance.last())
  cy.get('textarea[ng-model="Adress"]').type(chance.address())
  cy.get('input[ng-model="EmailAdress"]').type(chance.email())
  cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false }))
  cy.get('input[value="FeMale"]').check()
  cy.get('input[type=checkbox]').check('Cricket')
  cy.get('input[type=checkbox]').check('Movies')
  cy.get('input[type=checkbox]').check('Hockey')
  cy.get('select#Skills').select('Javascript')
  cy.get('select#countries').select('Australia')
  cy.get('select#country').select('Bangladesh', { force: true })
  cy.get('select#yearbox').select('1933')
  cy.get('select[ng-model="monthbox"]').select('June')
  cy.get('select#daybox').select('13')
  cy.get('input#firstpassword').type('Javascript-99')
  cy.get('input#secondpassword').type('Javascript-99')
  cy.get('input#imagesrc').attachFile('foto-perfil.jpeg')
})

When(/^salvar$/, () => {
  cy.get('button#submitbtn').click()
})

Then(/^serei cadastrada com sucesso$/, () => {
  cy.wait('@getNewTable').then(resGetNewTable => {
    expect(resGetNewTable.status).to.eq(200)
  })
  cy.wait('@postNewTable').then(resPostNewTable => {
    expect(resPostNewTable.status).to.eq(200)
  })
  cy.wait('@postNewUser').then(resPostNewUser => {
    expect(resPostNewUser.status).to.eq(200)
  })
  cy.url().should('contain', 'WebTable')
})
