@skip
Feature: Create Account

  Scenario: Successful account creation
    Given I am on the Create Account page
    When I create an account with valid details
    Then I should see a success message
