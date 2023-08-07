export class HomePage {
    navigate () {
        
    }
    validateHeader() {
        cy.get('.next-vhmemw').should('be.visible');
    }
    validateBody() {
        cy.get('.next-1ib1no1').should('be.visible');
        cy.get('.next-1d3bbye > :nth-child(2)').should('be.visible');
        cy.get('.MuiGrid-grid-md-5').should('be.visible');
        cy.get('.MuiGrid-grid-md-7').should('be.visible');
        cy.get('.next-1d3bbye > :nth-child(4)').should('be.visible');
        cy.get('.next-1d3bbye > :nth-child(5)').should('be.visible');
    }
    validateFooter() {
        cy.get('.next-xpy65t > .next-0').should('be.visible');
    }
}