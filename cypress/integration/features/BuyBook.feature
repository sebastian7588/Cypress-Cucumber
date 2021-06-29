Feature: Buy Book

  Scenario Outline: Add book to cart and buy it
    Given I have open Home Page
    And I have add "Mastering JavaScript" book with price "350.00" and move to Cart Page
    And Cart Page should contain "Mastering JavaScript" with price "₹350.00"
    When I'm updating cart, by adding quantity 2 and coupon "krishnasakinala" to "Mastering JavaScript" book with price "350.00"
    And I proceed to Checkout Page
    Then I'm filling billing details with "<first name>","<last name>","<company name>","<email address>","<phone>","<country>","<address>","<postcode>","<city>","<additional information>", check it again and place order
    And I should be on Order Details Page

    Examples:
      | first name | last name | company name | email address  | phone     | country | address  | postcode   | city     | additional information |
      | Theodor    | Test      | LuxTest      | luxtest@lux.pl | 784930193 | Poland  | testado  | 76463      | Testland | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |


