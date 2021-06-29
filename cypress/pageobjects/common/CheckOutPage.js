class CheckOutPage {

    openCheckOut() {
        return cy.visit('http://practice.automationtesting.in/checkout/')
            .title().should('include', 'Checkout – Automation Practice Site')
            .url().should('include', 'checkout/')
    }

    verifyCheckOut() {
        cy.title().should('include', 'Checkout – Automation Practice Site')
            .url().should('include', 'checkout/')
    }

    getFirstName() {
        return cy.get(`input[name='billing_first_name']`).should('be.visible')
    }

    getLastName() {
        return cy.get(`input[name='billing_last_name']`).should('be.visible')
    }

    getCompanyName() {
        return cy.get(`input[name='billing_company']`).should('be.visible')
    }

    getEmailAddress() {
        return cy.get(`input[name='billing_email']`).should('be.visible')
    }

    getPhone() {
        return cy.get(`input[name='billing_phone']`).should('be.visible')
    }

    getAddress() {
        return cy.get(`input[name='billing_address_1']`).should('be.visible')
    }

    getPostcode() {
        return cy.get(`input[name='billing_postcode']`).should('be.visible')
    }

    getCity() {
        return cy.get(`input[name='billing_city']`).should('be.visible')
    }

    getAdditionalInformation() {
        return cy.get(`textarea[name='order_comments']`).should('be.visible')
    }

    chooseCountry(country) {
        cy.get(`div[class='select2-container country_to_state country_select']`).should('be.visible').click()
        cy.xpath(`//div[@class='select2-search']//input[@type='text']`).should('be.visible').type(country)
        cy.xpath(`//ul[@role='listbox']//span[contains(text(),'${country}')]`).should('be.visible').click()
    }

    paymentMethod() {
        cy.get(`input[id='payment_method_cod']`).should('be.visible').click()
    }

    clickPlaceOrder() {
        cy.get(`input[id='place_order']`).should('be.visible').click()
    }

}
export default CheckOutPage