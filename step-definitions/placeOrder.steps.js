const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const PDP = require('../pages/placeOrder.js');
const SearchPage = require('../pages/homePage.js');

let browser, context, page, pdp, searchPage;

Given('I have searched for {string}', async function (searchTerm) {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  searchPage = new SearchPage(page);
  pdp = new PDP(page);

  await page.goto('https://www.macys.com/');
  await searchPage.searchProduct(searchTerm);
});

When('I select the first product from search results', async function () {
  await pdp.selectFirstProduct();
});

When('I add the product to my bag', async function () {
  await pdp.addToBag();
});

When('I view my bag', async function () {
  await pdp.viewBag();
});

When('I place the order', async function () {
  await pdp.placeOrder();
});

Then('I should be on the checkout page', async function () {
  const checkoutHeader = page.locator('h1:has-text("Checkout")');
  await expect(checkoutHeader).toBeVisible();

  await browser.close();
});