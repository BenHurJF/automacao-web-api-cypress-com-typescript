describe('Cenarios de Login do domínio ADMIN', () => {
    beforeEach(() => {
        cy.visit('/admin/auth')
    })
 
    it('Deve realizar login com sucesso', () => {
        cy.intercept('**/api/notifications/me').as('waitNotification')
        cy.guiLogin()
        cy.wait('@waitNotification')

        cy.get('.overlay-container')
            .children('#toast-container').children('.toast-success')
            .children('.toast-title').should('have.text', ' Bem-vindo ')
            .siblings('.toast-message').should('be.visible')
            .should('have.text', ' Login realizado com sucesso ')
    })
    it('Nao deve efetuar o login (email errado)', () => {
        cy.intercept('**/api/auth/login').as('waitLoginEmail')
        cy.guiLogin('teste@cypress.io', '9fgyzHsD')
        cy.wait('@waitLoginEmail').its('response').then(res => {
            expect(res.statusCode).to.be.equal(404)
            expect(res.statusMessage).to.be.equal('Not Found')
        })
        // TODO: Incluir validações de mensagem de erro
    })
    it('Não deve efetuar o login (senha errada)', () => {
        cy.intercept('**/api/auth/login').as('waitLoginSenha')
        cy.guiLogin('adm@al.senai.br', '9fgyzHs')
        cy.wait('@waitLoginSenha').its('response').then(res => {
            expect(res.statusCode).to.be.equal(401)
            expect(res.statusMessage).to.be.equal('Unauthorized')
        })
        // TODO: Incluir validações de mensagem de erro
    })
    
})