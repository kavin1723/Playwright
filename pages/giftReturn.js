class GiftReturn {

    constructor(page) {

        this.page = page;
        this.return = page.locate('a.menu-link.menu-link-sm[href="https://www.macys.com/returns"]');
        this.giftReturn = page.locate('span.order-history')
    }

    async giftOrderReturn() {

        await this.giftReturn.click();
    }

}