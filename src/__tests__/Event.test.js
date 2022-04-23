import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]}/>);
  });

  test('render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render the starting time', () => {
    expect(EventWrapper.find('.starting-time')).toHaveLength(1);
  });

  test('render a summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render the location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render a description', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  // collapse button
  test('event details are collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render event details upon button click', () => {
    EventWrapper.setState ({
      collapsed:true
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('collapse event details upon button click', () => {
    EventWrapper.setState ({
      collapsed:false
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});