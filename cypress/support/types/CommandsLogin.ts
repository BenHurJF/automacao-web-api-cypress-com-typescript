/// <reference types="cypress" />

export interface ResponseApiLogin {
  body: {
    accessToken: string,
    user: {
      id: number,
      privileges: any,
    }
  }
}

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * custom command to log in via interface
       * @example guiLogin('teste@...com', 'teste123')
       * 
       * @example guiLogin(Cypress.env('userDev').email, Cypress.env('userDev').senha)
       */
      guiLogin(email?: string, senha?: string): Chainable<void>

      /**
       * custom command complement for other commands
       * @example apiLogin('enderecoWeb', 'teste@...com', 'teste123')
       * 
       * @example apiLogin(Cypress.env('userDev').email, Cypress.env('userDev').senha)
       */
      apiLogin(endereco: string, email: string, password: string): Chainable<any>

      /**
       * custom command to log in via API in ADMIN
       * @example apiLoginAdmin('enderecoWeb', 'teste@...com', 'teste123')
       * 
       * @example apiLoginAdmin(Cypress.env('userDev').email, Cypress.env('userDev').senha)
       */
      apiLoginAdmin(): Chainable<object>

      /**
      * custom command to log in via API in STUDENT
      * @example apiLoginStudent('enderecoWeb', 'teste@...com', 'teste123')
      * 
      * @example apiLoginStudent(Cypress.env('userDev').email, Cypress.env('userDev').senha)
      */
      apiLoginStudent(): Chainable<object>

      /**
      * custom command to log in via API in BUSINESS
      * @example apiLoginBusiness('enderecoWeb', 'teste@...com', 'teste123')
      * 
      * @example apiLoginBusiness(Cypress.env('userDev').email, Cypress.env('userDev').senha)
      */
      apiLoginBusiness(): Chainable<object>

      
    }
  }
}