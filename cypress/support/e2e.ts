// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-cy', 'data-test', 'id', 'class', 'attributes', 'tag', 'nth-child'],
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// import plugins
import 'cypress-mochawesome-reporter/register';
import 'cypress-plugin-steps';

// Import commands.js using ES2015 syntax:

import './apiLogin'
import './gui/guiLogin'
import './after'

// Alternatively you can use CommonJS syntax:
// require('./commands')