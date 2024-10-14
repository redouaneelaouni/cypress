import {getByAttribute} from "./helper/test-helpers";

describe('Testing fundamentals', () => {

    beforeEach(() => {

        cy.visit('/fundamentals')
    })
    it('contain correct header text', () => {
        getByAttribute("data-cy", "fundamentals-header")
            .should('contain.text', 'Fundamentals');
    })

    it('accordion works correctly', () => {

        cy.contains(/Your tests will exist in a describe block. This block takes two arguments/i)
            .should('not.be.visible');
        cy.get('[cy-data="accordion-item-1"] div[role="button"]')
            .click();

        cy.contains(/Your tests will exist in a describe block. This block takes two arguments/i)
            .should('be.visible');
        cy.get('[cy-data="accordion-item-1"] div[role="button"]')
            .click();
        cy.contains(/Your tests will exist in a describe block. This block takes two arguments/i)
            .should('not.be.visible');


    })


})