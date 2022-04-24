import React, { Component } from 'react';
import './App.css';
import EventList from './EventList.js';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  
  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents,
    },
    this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
      ? events 
      : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount
        });
      }
    });
  }

  render() {

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents}/>
      </div>
    );
  }
  
}

export default App;

