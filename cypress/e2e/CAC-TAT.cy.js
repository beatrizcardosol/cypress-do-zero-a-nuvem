
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/src/index.html')
  })
  it('verifica o título da aplicação', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName')
      .as('textField')
      .should('be.visible')
      .type('Bia')
    cy.get('@textField')
      .should('have.value', 'Bia')

    cy.get('#lastName')
      .as('textField')
      .should('be.visible')
      .type('Oliveira')
    cy.get('@textField')
      .should('have.value', 'Oliveira')

    cy.get('#email')
      .as('textField')
      .should('be.visible')
      .type('anabeatrizcaoliveira@gmail.com')
    cy.get('@textField')
      .should('have.value', 'anabeatrizcaoliveira@gmail.com')

    cy.get('#open-text-area')
      .as('textField')
      .should('be.visible')
      .type('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', { delay: 0 })
    cy.get('@textField')
      .should('have.value', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.')
    cy.get('.button').click()
    cy.get('.success')
      .should('be.visible')


  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('.button').click()
    cy.get('.error > strong')
      .should('be.visible')
  })

})