## Meet-Application

A serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.<br />

# User Stories and Scenarios

Feature 1: Filter events by city<br />
User Story: A s user, I should be able to filter the events by city so that I can filter out irrelevent information.<br />

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events<br />

Scenario 2: User should see a list of suggestions when they search for a city.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed<br />

Scenario 3: User can select a city from the suggested list.
- Given the user was typing “Berlin” in the city textbox
  And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”)
  And the user should receive a list of upcoming events in that city<br />


Feature 2: Show/hide an event's details<br />
User Story: As a user, I should be able to click on an event so that I can see more details about it.<br />

Scenario 1: An event element is collapsed by default 
- Given a user accesses the main page
- When the user did not click on anything
- Then the event details will be in a collapsed state<br />

Scenario 2: User can expand an event to see its details 
- Given a user wants to access details for an event
- When a user clicks on the event
- Then the details for said event will expand<br />

Scenario 3: User can collapse an event to hide its details 
- Given a user wants no longer wants to view an event's details
- When the user clicks on the close button
- Then the event details will collapse<br />

Feature 3: Specify number of events<br />
User Story: As a user, I should be able to decide the amount of events displayed so that I have control over how many events I see at a time.<br />

Scenario 1: When user hasn’t specified a number, 32 is the default number 
- Given a user hasn't specified the number of events they want displayed
- When the user opens the application
- Then the number of events displayed will be 32<br />

Scenario 2: User can change the number of events they want to see 
- Given a user wants to change the number of events displayed
- When the user clicks on the menu
- Then they will be able to select the amount of events to be displayed<br />

Feature 4: Use the app when offline<br />
User Story: As a user, I should be able to open the app without an internet connection so that I have access to the data at any time.<br />

Scenario 1: Show cached data when there’s no internet connection 
- Given a user isn't connected to the internet
- When the user opens the application
- Then their cached data will be shown<br />

Scenario 2: Show error when user changes the settings (city, time range) 
- Given a user accessed the application while not being connected to the internet
- When the user wants to change their settings
- Then an error message will appear<br />

Feature 5: Data visualization<br />
User Story: As a user, I should be able to see a chart with the number of upcoming events so that I can have a quick overview of them.<br />

Scenario 1: Show a chart with the number of upcoming events in each city 
- Given a user is on the main page
- When the user wants to see upcoming events
- Then they will have access to a chart of the upcoming events 