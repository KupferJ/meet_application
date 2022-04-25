Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given a user hasn't specified the number of events they want displayed
When the user opens the application
Then the number of events displayed will be 32

Scenario: User can change the number of events they want to see
Given a user wants to change the number of events displayed
When the user clicks on the menu
Then they will be able to select the amount of events to be displayed