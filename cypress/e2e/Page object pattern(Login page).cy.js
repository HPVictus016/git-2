import { Login } from "../../pages/Login";
const LoginPage = new Login();
describe('page object example', () => {
    it('login page test', () => {
        //visit page
        LoginPage.navigate();
        //check title
        LoginPage.validateLoginTitle();
        //check inputs
        LoginPage.validateInputs();
        //check button
        LoginPage.validateButton();
        //check link
        LoginPage.validatePasswordLink();
    })
})