class PDP {
    constructor(page) {
        this.page = page;
        this.productCards = page.locator('a.brand-and-name');
        this.addToBagLocator = page.locator('.emphasis.expanded.button');
        this.viewBagLocator = page.locator('.secondary.button.cell.margin-bottom-xs');
        this.checkoutButton = page.locator('#checkout-button');
    }

    async selectFirstProduct() {
        await this.productCards.first().click();
    }

    async addToBag() {
        await this.addToBagLocator.click();
    }

    async viewBag() {
        await this.viewBagLocator.click();
    }

    async placeOrder() {
        await this.checkoutButton.click();
    }
}

module.exports = PDP;