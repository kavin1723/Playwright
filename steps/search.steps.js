const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/homePage.js');

Given('I am logged in', async function () {
    this.hmPage = new HomePage(this.page);
    await this.hmPage.goto();
    await this.hmPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

When('I search for {string}', async function (item) {
    await this.hmPage.search(item);
});

Then('the search should be successful', async function () {
    return true;
});