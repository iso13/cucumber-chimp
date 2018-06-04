// ssoLogin.page.js
import Page from './page';

class SSOLoginPage extends Page {

/**
 * define elements
 */

    get username() {return browser.element('#userName');}

    get password() {return browser.element('#password');}

    get ssoLoginButton() {return browser.element('#loginButton');}

    get flash() {return browser.element('.errorText');}

/**
 * define or overwrite page methods
 */

    submit() {this.ssoLoginButton.click();}
}

export default new SSOLoginPage()
