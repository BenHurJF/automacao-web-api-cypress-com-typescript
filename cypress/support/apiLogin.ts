import verificaPerfilEmpresa from '../shared/functions';

const userLevel = 'previewUser' || Cypress.env('userLevel');

Cypress.Commands.add('apiLogin', (endereco, email, password) => {
    cy.request({
        method: 'POST',
        url: endereco,
        headers: {
            'Content-Type': 'application/json',
            authority: `${Cypress.config('baseUrl')}`,
            Referer: endereco,
        },
        body: {
            email: Cypress.env(userLevel).email || email,
            password: Cypress.env(userLevel).password || password
        }
    })
})

Cypress.Commands.add('apiLoginAdmin', () => {
    cy.apiLogin(
        Cypress.config('baseUrl') + `/api/auth/login`,
        Cypress.env(userLevel).email,
        Cypress.env(userLevel).password
    ).then((responseBody) => {
        verificaPerfilEmpresa(responseBody)
        return Cypress.env('accessTokenAdmin', responseBody.body.accessToken), Cypress.env('userId', responseBody.body.user.id);
    })
})

Cypress.Commands.add('apiLoginStudent', () => {
    cy.apiLogin(
        `${Cypress.config('baseUrl')}/student-api/v2/auth/login`,
        Cypress.env(userLevel).email,
        Cypress.env(userLevel).password
    ).then((responseBody) => {
        return Cypress.env('accessTokenStudent', responseBody.body.accessToken);
    })
})

Cypress.Commands.add('apiLoginBusiness', () => {
    cy.apiLogin(
        'https://business.play.al.senai.br/api/v1/auth/login',
        Cypress.env(userLevel).email,
        Cypress.env(userLevel).password
    ).then((responseBody) => {
        return Cypress.env('accessTokenBusiness', responseBody.body.accessToken);
    })
})