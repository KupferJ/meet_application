import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('a user hasn\'t specified the number of events they want displayed', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user opens the application', () => {
      AppWrapper.update();
    });

    then('the number of events displayed will be 32', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('a user wants to change the number of events displayed', async () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the menu', () => {
      AppWrapper.update();
      AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: '1' } });
    });

    then('they will be able to select the amount of events to be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});