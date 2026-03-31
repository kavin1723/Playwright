Feature: Search

  Scenario: Search for a bag
    Given I am logged in
    When I search for "bag"
    Then the search should be successful