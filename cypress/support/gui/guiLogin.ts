Cypress.Commands.add('guiLogin',
    (email = Cypress.env("previewUser").email,
        senha = Cypress.env("previewUser").password) => {
        cy.get('#mat-input-0')
            .should('be.visible')
            .type(email)

        cy.get('#mat-input-1')
            .should('be.visible')
            .type(senha, { log: false })

        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
    })