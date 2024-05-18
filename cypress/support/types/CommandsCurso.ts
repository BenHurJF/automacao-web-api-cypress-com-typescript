export { }
declare global {
    namespace Cypress {
        interface Chainable {
            dadosDoCurso(payloadCurso: object): Chainable<number>
        }
    }
}