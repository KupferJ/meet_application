import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />)
  });

  test('render number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render default number of events', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({numberOfEvents: '32'});
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', {
      target: { value: "10" }
    })
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual('10');
  }); 

});

// import React from 'react';
// import { shallow } from 'enzyme';
// import NumberOfEvents from '../NumberOfEvents';

// describe('<NumberOfEvents /> component', () => {
//   let NumberOfEventsWrapper;

//   beforeAll(() => {
//     NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />)
//   });

//   test('render text input', () => {
//     expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
//   });

//   test('change state when number input changes', () => {
//     NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
//     NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: "12" } });
//     expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual("12");
//   });
// });