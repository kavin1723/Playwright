const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
require('dotenv').config();

Before(async function () {
    this.browser = await chromium.launch({
        headless: false,
    });

    this.context = await this.browser.newContext({
        recordVideo: { dir: 'videos/' },
    });

    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(60000); // ✅ 60 sec timeout
});

After(async function () {
    await this.browser.close();
});