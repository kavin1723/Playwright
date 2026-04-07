Feature: Macy's Guest Order Lookup
  As a Macy's guest user
  I want to look up my order
  So that I can view my order details

  Scenario: Successful order lookup
    Given I am on the Macy's order lookup page
    When I enter order number "123456789", email "test@example.com", and phone "9876543210"
    And I submit the order lookup form
    Then I should see the order details page
