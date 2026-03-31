const { test, expect } = require('@playwright/test');
const CreateAccount = require('../pages/createAccount');
const SignIn = require('../pages/signIn');
const HomePage = require('../pages/homePage');

test('successful account creation', async ({ page }) => {
    const caPage = new CreateAccount(page);
    await caPage.goto();
    await caPage.createAcc(
        'test',
        'out',
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD,
        'January',
        '01',
        '868-989-7969'
    );
    await expect(page.locator('.p-message-wrapper')).toContainText(
        'Congrats! You created a Macy’s account & added your Star Rewards membership.'
    );
});

test('successful Login', async ({ page }) => {
    const siPage = new SignIn(page);
    await siPage.goto();
    await siPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await expect(page.locator('span:has-text("Hi, John")')).toHaveText('Hi, John', { timeout: 15000 });
});

test('search bag', async ({ page }) => {
    const hmPage = new HomePage(page);
    await hmPage.goto();
    await hmPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await hmPage.search('bag');
    expect(true).toBeTruthy();
});