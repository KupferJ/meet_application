import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let AppWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('a user accesses the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user did not click on anything', () => {
    });

    then('the event details will be in a collapsed state.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0)
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('a user wants to access details for an event', async () => {
      AppWrapper = await mount(<App />);
    });

    when('a user clicks on the event', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    then('the details for said event will expand.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('a user wants no longer wants to view an event\'s details', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.show-details').at(0).simulate('click');
      expect(AppWrapper.find('.extra-details')).toHaveLength(1);
    });

    when('the user clicks on the close button', () => {
      AppWrapper.find('.hide-details').at(0).simulate('click');
    });

    then('the event details will collapse.', () => {
      expect(AppWrapper.find('.extra-details')).toHaveLength(0);
    });
  });
  
});