const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const CreateAccount = require("../pages/createAccount.js");

Given("I am on the Create Account page", async function () {
    this.caPage = new CreateAccount(this.page);
    await this.caPage.goto();
});

When("I create an account with valid details", async function () {
    await this.caPage.createAcc(
        "test",
        "out",
        process.env.USER_EMAIL,
        process.env.USER_PASSWORD,
        "January",
        "01",
        "868-989-7969"
    );
});

Then("I should see a success message", async function () {
    await expect(this.page.locator(".p-message-wrapper")).toContainText("Congrats");
});