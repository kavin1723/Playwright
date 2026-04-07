const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const GuestOrder = require('../pages/GuestOrder'); // adjust path as needed

let browser, context, page, guestOrder;

Given('I am on the Macy\'s order lookup page', async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    guestOrder = new GuestOrder(page);

    await page.goto('https://www.macys.com/');
    await guestOrder.orderLookUpButton();
});

When('I enter order number {string}, email {string}, and phone {string}', async function (orderNo, email, phone) {
    this.orderNo = orderNo;
    this.email = email;
    this.phone = phone;

    await guestOrder.orderNumber.fill(orderNo);
    await guestOrder.emailId.fill(email);
    await guestOrder.phoneNumber.fill(phone);
});

When('I submit the order lookup form', async function () {
    await guestOrder.viewOrder.click();
});

Then('I should see the order details page', async function () {
    // Example assertion: check if order details section is visible
    const orderDetails = page.locator('#order-details');
    await expect(orderDetails).toBeVisible();

    await browser.close();
});