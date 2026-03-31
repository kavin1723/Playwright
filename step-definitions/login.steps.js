const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignIn = require('../pages/signIn.js');

Given('I am on the Sign In page', async function () {
    this.siPage = new SignIn(this.page);
    await this.siPage.goto();
});

When('I login with valid credentials', async function () {
    await this.siPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

Then('I should see the welcome message', async function () {
    await expect(this.page.locator('span:has-text("Hi, John")')).toHaveText('Hi, John', { timeout: 15000 });
});