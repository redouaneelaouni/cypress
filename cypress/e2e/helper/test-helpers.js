
export const getByAttribute = (attributeName, attributeValue) => {

    return cy.get(`[${attributeName}="${attributeValue}"]`);
}