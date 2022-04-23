import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: '32',
  }

  handleInputChange = (event) => {
		const value = event.target.value;
		this.setState({
			numberOfEvents: event.target.value,
		});
	}

  render () {
    const { numberOfEvents } =this.state;

    return (
      <div className="eventNumber">
        <input type="number" className="numberOfEvents" onChange={this.handleInputChange} value={this.state.numberOfEvents} />
      </div>
    )  
  }

};

export default NumberOfEvents
