Cypress.Commands.add('dadosDoCurso', (payloadCurso) => {
    cy.section('Dados do Curso')
    cy.request({
        method: 'POST',
        url: '/api/courses',
        headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
        body: payloadCurso
    }).then((response) => {
        Cypress.env('nomeCurso', response.body.course.name)
        Cypress.env('tipoCurso', response.body.course.typeId)
        Cypress.env('modalidade', response.body.course.categoryId)

        return response.body.course.id as number;
    })
});

Cypress.Commands.add('ementa', (payloadCurso) => {
    cy.section('Dados do Curso')
    cy.request({
        method: 'POST',
        url: '/api/courses',
        headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
        body: payloadCurso
    }).then((response) => {
        Cypress.env('nomeCurso', response.body.course.name)
        Cypress.env('tipoCurso', response.body.course.typeId)
        Cypress.env('modalidade', response.body.course.categoryId)

        return response.body.course.id as number;
    })
});