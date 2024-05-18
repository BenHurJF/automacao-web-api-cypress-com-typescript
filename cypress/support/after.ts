after('after:run', () => {
  if(Cypress.env('tipoCurso') == 1) Cypress.env('tipoCurso', "Aulas em Vídeos")
  if(Cypress.env('tipoCurso') == 2) Cypress.env('tipoCurso', "Aulas por Whatsapp")
  if(Cypress.env('tipoCurso') == 3) Cypress.env('tipoCurso', "Aulas em Podcast")
  if(Cypress.env('tipoCurso') == 4) Cypress.env('tipoCurso', "Curso Flexível")

  if(Cypress.env('modalidade') == 1) Cypress.env('modalidade', "Microcurso")
  if(Cypress.env('modalidade') == 2) Cypress.env('modalidade', "Minicurso")

  const objectCardDiscord = {
    "content": "Curso criado via automação com Cypress:",
    "embeds": [
      {
        "title": "Curso criado no admin para teste.",
        "fields": [
          {
            "name": "Nome do curso",
            "value": Cypress.env('nomeCurso'),
          },
          {
            "name": "Tipo do curso",
            "value": Cypress.env('tipoCurso')
          },
          {
            "name": "Modalidade",
            "value": Cypress.env('modalidade')
          },
          // {
          //   "name": "Publicado",
          //   "value": Cypress.env('publicado')
          // }
        ],
        "thumbnail": {
          "url": "https://i.scdn.co/image/ab6765630000ba8a37f19f2aac5a924a0d550b50"
        },
        "footer": {
          "text": "Enviado via webhook do Discord"
        }
      }
    ]
  }
  

  cy.task('sendResults', objectCardDiscord)
})