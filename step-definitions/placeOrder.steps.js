const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ProductSearch = require('../../pages/productSearch'); // adjust path

let productSearch;

Given('I am on the home page', async function () {
  productSearch = new ProductSearch(this.page);
  await productSearch.goto();
});

When('I search for {string}', async function (item) {
  await productSearch.search(item);
});

When('I select the first product', async function () {
  await productSearch.product.first().click();
});

When('I add the product to the bag', async function () {
  await productSearch.addToBag.click();
});

When('I proceed to checkout', async function () {
  await productSearch.bag.click();
  await productSearch.checkOutButton.click();
});

Then('I should see the checkout page', async function () {
  await expect(productSearch.firstName).toBeVisible();
});