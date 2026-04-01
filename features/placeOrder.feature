Feature: Product Search and Checkout
  As a user
  I want to search for a product and proceed to checkout
  So that I can buy items online

Scenario: Search for a product and add to bag
    Given I am on the home page
    When I search for "Formal Shirt"
    And I select the first product
    And I add the product to the bag
    And I proceed to checkout
    Then I should see the checkout page