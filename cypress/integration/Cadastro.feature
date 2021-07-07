Feature: Cadastro

  Como usuário, desejo realizar um cadastro
  Para que possa acessar o sistema

  # Given -> Dado   -> Contexto
  # When  -> Quando -> Ação executada
  # Then  -> Então  -> Resultado esperado
  # And   -> E      -> Continuidade do passo anterior

  Scenario: Cadastro de usuario no site
    Given que acesso o site
    When  informar meus dados
    And salvar
    Then serei cadastrada com sucesso