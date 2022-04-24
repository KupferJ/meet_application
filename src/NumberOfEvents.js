import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  };

  handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({ numberOfEvents: value });
	};

  render () {
    const { numberOfEvents } = this.state;

    return (
      <div className="eventNumber">
        <label>Number of events: </label>
        <input type="text" className="numberOfEvents" value={numberOfEvents} onChange={this.handleInputChange} />
      </div>
    );
  }

}

export default NumberOfEvents;
