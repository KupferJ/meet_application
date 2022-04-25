import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: "",
  };


  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: "Enter a number between 1 and 32.",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  }
    

  render () {

    return (
      <div className="eventNumber">
        <label>Number of events: </label>
        <input type="number" className="numberOfEvents" value={this.state.numberOfEvents} onChange={this.handleInputChanged} />
      </div>
    );
  }

}

export default NumberOfEvents;

