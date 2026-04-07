Feature: Add product to bag and checkout
  As a Macy's shopper
  I want to search for a product, add it to my bag, and place an order
  So that I can complete my purchase

  Scenario: Successful product checkout
    Given I have searched for "shirt"
    When I select the first product from search results
    And I add the product to my bag
    And I view my bag
    And I place the order
    Then I should be on the checkout page
