//unityLogin.page.js

import Page from './page';

class UnityLoginPage extends Page {

    get unityLoginButton() {return browser.element('.cad-button');}

}
export default new UnityLoginPage();
