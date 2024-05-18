import { payloadDadosDoCurso, payloadEmenta } from '../../fixtures/payloadsCurso';

describe('Criação de cursos automatizados', () => {
    before(() => cy.apiLoginAdmin());

    it('Create a course', () => {
        const dadosCurso = {
            nome: 'Curso criado via Cypress', tipoCurso: 1, modalidade: 1, userId: Cypress.env('userId')
        };
            cy.dadosDoCurso(payloadDadosDoCurso(dadosCurso)).then((cursoId) => {

                    cy.section('Ementa')
                    cy.request({
                        method: 'PUT',
                        url: `/api/courses/${cursoId}`,
                        headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
                        body: payloadEmenta(dadosCurso)
                        })

            cy.section('Grade Curricular')
            cy.step('Módulos')
            cy.request({
                method: 'POST',
                url: '/api/modules',
                headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
                body: {
                    description: "Módulo 1 do curso",
                    workload: 1,
                    originCourseId: cursoId
                }
            }).then((response) => {

                cy.step('Aulas')
                cy.request({
                    method: 'POST',
                    url: '/api/lessons',
                    headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
                    body: {
                        title: "Aula 1 teste",
                        moduleId: response.body.module.id,
                        order: 1
                    }
                }).then((response) => {

                    cy.step('Vídeo da Aula')
                    cy.request({
                        method: 'POST',
                        url: '/api/lessons/videos',
                        headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
                        body: {
                            videoId: 28,
                            lessonId: response.body.lesson.id
                        }
                    })
                }).then((response) => {

                    cy.step('Atividade do vídeo da aula')
                    cy.request({
                        method: 'POST',
                        url: '/api/lessons/videos/activities',
                        headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
                        body: {
                            activityId: 38,
                            lessonVideoId: response.body.lessonVideo.id,
                            startTime: "193"
                        }
                    })
                
                })

        // cy.step('Medalha Digital')
        // cy.request({
        //     method: 'POST',
        //     url: '/api/courses',
        //     headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
        //     body: {}
        // })

        // cy.step('Market Place')
        // cy.request({
        //     method: 'POST',
        //     url: '/api/courses',
        //     headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
        //     body: {}
        // })

        // cy.step('Publicar')
        // cy.request({
        //     method: 'POST',
        //     url: '/api/courses',
        //     headers: { Authorization: `Bearer ${Cypress.env('accessTokenAdmin')}` },
        //     body: {}
        // }).then(() => {
        // Cypress.env('publicado', response.body.course.published)
        // })
            })
        })
    })
})