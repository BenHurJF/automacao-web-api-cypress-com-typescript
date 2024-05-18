/// <reference types="cypress" />

describe('Cenários de Grupos de Menu', () => {
    beforeEach(() => {});
    it('Deve exibir os menus na homepage', () => {
        cy.apiLoginAdmin().then(({body}: any) => {
            cy.visit('admin/-/inicio', {
                onBeforeLoad: (win) => {
                    win.document.cookie = '_hjSessionUser_2743142=eyJpZCI6ImZkZGY2NWYwLWRhMjQtNWRkNy04ZGNmLWEwOGExYjhkYjBmOCIsImNyZWF0ZWQiOjE2ODMwNDg2NTUwMjMsImV4aXN0aW5nIjp0cnVlfQ==',
                    win.sessionStorage.setItem('user_data', JSON.stringify({
                        id:5,
                        iat:1685460716,
                        exp:1685547116
                    })
                    ),
                    win.sessionStorage.setItem('access_token', `Bearer ${body.accessToken}`)
                    win.sessionStorage.setItem('token', JSON.stringify(body))
                }
            })
            
        })
    });


});