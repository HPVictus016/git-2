import { HomePage } from "../../pages/HomePage";
const mainPage = new HomePage();
it('main page test', () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
    cy.get('.eckniwg2').click();
    //check header
    mainPage.validateHeader();
    //check body
    mainPage.validateBody();
    //check footer
    mainPage.validateFooter();
});