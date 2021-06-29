class HomePage {

    openHomePage() {
        return cy.visit('http://practice.automationtesting.in/')
        .title().should('include', 'Automation Practice Site')
        .url().should('include', '/')
    }

    verifyHomePage() {
        cy.title().should('include', 'Automation Practice Site')
            .url().should('include', '/')
    }

    getBook(book) {
        return cy.get(`img[title="${book}"]`).should('be.visible')
    }

    clickAddButton(book){
        return cy.xpath(`//img[@title="${book}"]/../..//a[contains(text(),"Add to basket")]`).click()
    }

    verifyBookPrice(book,value){
       return cy.xpath(`//img[@title="${book}"]/..//span[contains(text(),"${value}")]`).should('be.visible')
    }

    getBookPrice(book,value){
        return cy.xpath(`//img[@title="${book}"]/..//span[contains(text(),"${value}")]`).invoke('text')
    }

    clickCartButton(){
        return cy.get('a[title="View your shopping cart"]').click()
    }
}
export default HomePage