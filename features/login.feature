Feature: Login

  Scenario: Successful login
    Given I am on the Sign In page
    When I login with valid credentials
    Then I should see the welcome message