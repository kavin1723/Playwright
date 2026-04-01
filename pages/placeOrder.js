class productSearch {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#v-0-0');
        this.product = page.locator("a.brand-and-name");
        this.addToBag = page.locator("button.emphasis.expanded.button");
        this.bag = page.locator("a.grid-x.align-center.undecorated-link.bag-icon.bag-dark-large-star.rail-btn-hover.margin-left-xs");
        this.closePopUp = page.locator("button.v-overlay-close-btn.cell.large-1.medium-1.small-1");
        this.checkOutButton = page.locator("button.primary.button.flex-button-content.align-middle.button.emphasis.expanded.margin-bottom-xs");
        this.firstName = page.locator("#rc-shipping-firstName");
        this.lastName = page.locator("#rc-shipping-lastName");
        this.address = page.locator("#rc-shipping-address1");
        this.zipCode = page.locator("#rc-shipping-zip");
        this.state = page.locator("#rc-shipping-state");
        this.city = page.locator("#rc-shipping-city");
        this.phoneNumber = page.locator("#rc-shipping-phone");
        this.submitButton = page.locator("#rc-shipping-submit");
        this.popUpUseThisAddButton = page.locator("#useEnteredAddress");
        this.saveAndContinue = page.locator("rc-shipping-address-use");


    }

    async goto() {
        await this.page.goto(process.env.Base_URL);
    }


    async signIn(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.alwaysSignIn.click();
        await this.closePopUp.click();
        await this.signInButton.click();
    }

    async search(item) {
        await this.searchBox.fill(item);
        await this.page.waitForTimeout(5000);
        await this.page.keyboard.press("Enter");
    }

}

module.exports = HomePage;