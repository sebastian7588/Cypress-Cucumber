class OrderDetailsPage {

    openCheckOut() {
        return cy.visit('http://practice.automationtesting.in/checkout/id')
            .title().should('include', 'Checkout – Automation Practice Site')
            .url().should('include', 'checkout/order-received')
    }

    verifyCheckOut() {
        cy.title().should('include', 'Checkout – Automation Practice Site')
            .url().should('include', 'checkout/order-received/')
    }

    getSubtotalPrice() {
        return cy.xpath(`//th[contains(text(),'Subtotal')]//..//span[@class='woocommerce-Price-amount amount']`).invoke('text')
    }

    getCouponPrice() {
        return cy.xpath(`//th[contains(text(),'Discount')]//..//span[@class='woocommerce-Price-amount amount']`).invoke('text')
    }

    getTotalPrice() {
        return cy.xpath(`//th[contains(text(),'Total')]//..//span[@class='woocommerce-Price-amount amount']`).invoke('text')
    }

}
export default OrderDetailsPage