Feature: Show/hide an event's details

Scenario: An event element is collapsed by default.
Given a user accesses the main page
When the user did not click on anything
Then the event details will be in a collapsed state.

Scenario: User can expand an event to see its details
Given a user wants to access details for an event
When a user clicks on the event
Then the details for said event will expand.

Scenario: User can collapse an event to hide its details
Given a user wants no longer wants to view an event's details
When the user clicks on the close button
Then the event details will collapse.