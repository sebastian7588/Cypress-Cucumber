class CartPage {

    openCartPage() {
        return cy.visit('http://practice.automationtesting.in/basket/')
            .title().should('include', 'Basket – Automation Practice Site')
            .url().should('include', 'basket/')
    }

    verifyCartPage() {
        cy.title().should('include', 'Basket – Automation Practice Site')
            .url().should('include', 'basket/')
    }

    addCoupon(coupon) {
        cy.xpath('//div[@class="coupon"]//input[@name="coupon_code"]')
            .type(coupon).should('have.value', coupon)
        cy.xpath('//div[@class="coupon"]//input[@class="button"]').click()
        //wait for page update
        cy.wait(4000)
    }

    getProductPrice(book, value) {
        return cy.xpath(`//a[contains(text(),"${book}")]/../..//td[@class="product-price"]//span[contains(text(),"${value}")]`).invoke('text')
    }

    getTotalProductPrice(book) {
        return cy.xpath(`//a[contains(text(),"${book}")]/../..//td[@class="product-subtotal"]//span[@class='woocommerce-Price-amount amount']`).invoke('text')
    }

    getQuantity(book,quantity) {
        cy.xpath(`//a[contains(text(),"${book}")]/../..//div[@class="quantity"]//input`).clear()
            .type(quantity).should('have.value', quantity)
        cy.get('input[name="update_cart"]').click()
        //wait for page update
        cy.wait(3000)
    }

    getProductName(book) {
        return cy.xpath(`//td[@class="product-name"]//a[contains(text(),"${book}")]`).should('be.visible')
    }


    getSubtotalPrice() {
        return cy.xpath(`//tr[@class="cart-subtotal"]//td[@data-title="Subtotal"]//span[@class="woocommerce-Price-amount amount"]`).invoke('text')
    }

    getTotalPrice() {
        return cy.xpath(`//tr[@class="order-total"]//td[@data-title="Total"]//span[@class="woocommerce-Price-amount amount"]`).invoke('text')

    }

    getCouponPrice(coupon) {

        return cy.xpath(`//tr[@class="cart-discount coupon-${coupon}"]//td[@data-title="Coupon: ${coupon}"]//span[@class="woocommerce-Price-amount amount"]`).invoke('text')

    }

    getTax() {
        // 5% tax
    }

    clickProceedToCheckout() {
        cy.xpath('//div[@class="cart_totals"]//a[contains(text(),"Proceed to Checkout")]').click()
    }

}
export default CartPage