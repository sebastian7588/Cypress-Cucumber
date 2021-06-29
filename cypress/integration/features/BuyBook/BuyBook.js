import HomePage from "../../../pageobjects/common/HomePage";
import CartPage from "../../../pageobjects/common/CartPage";
import CheckOutPage from "../../../pageobjects/common/CheckOutPage";
import OrderDetailsPage from "../../../pageobjects/common/OrderDetailsPage";

const homePage = new HomePage();
const cartPage = new CartPage();
const checkOutPage = new CheckOutPage();
const orderDetailsPage = new OrderDetailsPage();

let bookPriceHome;
let bookPriceCart;
let totalProductPriceCart;
let subtotalPriceCart;
let totalPriceCart;
let couponPriceCart;
let subtotalPriceOrder;
let couponPriceOrder
let totalPriceOrder;
let email;



Given('I have open Home Page',()=>{
    homePage.openHomePage()
})

And('I have add {string} book with price {string} and move to Cart Page',(book,value)=>{
    homePage.getBook(book)
    homePage.verifyBookPrice(book,value)
    homePage.getBookPrice(book,value).then(price => { bookPriceHome = price })
    homePage.clickAddButton(book)
    homePage.clickCartButton()
    cartPage.getProductPrice(book,value).then(price => { bookPriceCart = price })
})

And('Cart Page should contain {string} with price {string}',(book,price)=>{
    cartPage.verifyCartPage()
    cartPage.getProductName(book)
    expect(bookPriceCart).to.eq(price);
    expect(bookPriceHome).to.eq(bookPriceCart);
})

When('I\'m updating cart, by adding quantity {int} and coupon {string} to {string} book with price {string}',(quantity,coupon,book,value)=>{
    cartPage.getQuantity(book,quantity)
    cartPage.addCoupon(coupon)
    cartPage.getTotalProductPrice(book).then(price => { totalProductPriceCart = price })
    cartPage.getSubtotalPrice().then(price => { subtotalPriceCart = price })
    cartPage.getTotalPrice().then(price => { totalPriceCart = price })
    cartPage.getCouponPrice(coupon).then(price => { couponPriceCart = price })
})

And('I proceed to Checkout Page',()=>{
    cartPage.clickProceedToCheckout()
})

Then('I\'m filling billing details with {string},{string},{string},{string},{string},{string},{string},{string},{string},{string}, check it again and place order',(firstName,lastName,companyName,emailAddress,phone,country,address,postcode,city,additionalInformation)=>{
    // discount coupon is uniqu for one email
    email = (Math.random().toString(36).substring(2, 15) + "@pl.pl")
    cy.log(email)
    checkOutPage.verifyCheckOut()
    checkOutPage.getFirstName().type(firstName).should('have.value', firstName)
    checkOutPage.getLastName().type(lastName).should('have.value', lastName)
    checkOutPage.getCompanyName().type(companyName).should('have.value', companyName)
    checkOutPage.getEmailAddress().type(email).should('have.value', email)
    checkOutPage.getPhone().type(phone).should('have.value', phone)
    checkOutPage.getAddress().type(address).should('have.value', address)
    checkOutPage.getPostcode().type(postcode).should('have.value', postcode)
    checkOutPage.getCity().type(city).should('have.value', city)
    checkOutPage.getAdditionalInformation().type(additionalInformation).should('have.value', additionalInformation)
    checkOutPage.chooseCountry(country)
    checkOutPage.paymentMethod()
    checkOutPage.clickPlaceOrder()
    orderDetailsPage.getSubtotalPrice().then(price => { subtotalPriceOrder = price })
    orderDetailsPage.getCouponPrice().then(price => { couponPriceOrder = price })
    orderDetailsPage.getTotalPrice().then(price => { totalPriceOrder = price })
})

And('I should be on Order Details Page',()=>{
    orderDetailsPage.verifyCheckOut()
    expect(subtotalPriceOrder).to.eq(subtotalPriceCart);
    expect(couponPriceOrder).to.eq(couponPriceCart);
    expect(totalPriceOrder).to.eq(totalPriceCart);
})