class Return {

    constructor(page) {

        this.page = page;
        this.return = page.locate('a.menu-link.menu-link-sm[href="https://www.macys.com/returns"]');
        this.startReturn = page.locate('span.order-history')
    }

    async orderButtonClick() {
        await this.return.click();
    }

    async startOrderReturn() {

        await this.startReturn.click();
    }

}