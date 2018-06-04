Feature: Login
  As a Unity Admin
  I need to validate login permissions
  So I can ensure correct login states

  @wip
  Scenario: Evaluate at wip tag
    Given I access "this should not run"

  @watch
  Scenario: Login with invalid credentials
    Given I access "https://qa-app.cadreon.com"
    When I access Unity with invalid credentials
    Then I should receive a warning