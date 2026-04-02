class GuestOrder {

    constructor(page) {

        this.page = page;
        this.orderLookUp = page.locator('a.menu-link.menu-link-sm[href="https://www.macys.com/purchases/lookup"]');
        this.orderNumber = page.locator('#order-number-field');
        this.phoneNumber = page.locator('#phone-field');
        this.emailId = page.locator('#email-field');
        this.viewOrder = page.locator('#order-lookup-submit');

    }

    async orderLookUpButton() {

        await this.page.click(orderLookUp);
    }

    async fillOrderDetails() {

        await this.orderNumber.fill(orderNo);
        await this.emailId.fill(email);
        await this.phoneNumber.fill(phone);
        await this.viewOrder.click();
    }
}