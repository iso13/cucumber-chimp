const expect = require('chai').expect;
import UnityLoginPage from '../../pageobjects/unityLogin.page';
import SSOLoginPage from '../../pageobjects/ssoLogin.page';

module.exports = function () {

    this.Given(/^I access "([^"]*)"$/, function (pageUrl) {
        UnityLoginPage.open(pageUrl);
        UnityLoginPage.unityLoginButton.click();
    });

    this.When(/^I access Unity with invalid credentials$/, function () {
        browser.waitForExist('#userName', 30000);
        SSOLoginPage.username.setValue('test');
        SSOLoginPage.password.setValue('test');
        SSOLoginPage.submit();
    });

    this.Then(/^I should receive a warning$/, function () {
        expect(SSOLoginPage.flash.getText()).to.contain('Unknown user or bad password. Please try again. If the issue persists, please email the ESD at esd@interpublic.com. ErrorCode 13: InvalidUserOrPassword');
    });

};
