import React, { Component } from 'react';
import './App.css';
import EventList from './EventList.js';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: 'all',
    offlineText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
        events: events.slice(0, this.state.numberOfEvents),
        locations: extractLocations(events) });
      }
    });
  }
  
  componentWillUnmount(){
    this.mounted = false;
  }


  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
      if (!navigator.onLine) {
        this.setState({
          offlineText: 'You appear to be offline. Events cannot be updated.',
        });
      } else {
        this.setState({
          offlineText: '',
        });
      }
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

 
  render() {

    return (

      <div className="App">
        <div className="page-header">
          Meet Application
        </div>
        <div className="city-search-header">
          Enter a city near you
        </div>
        <div className="offlineAlert">
          <OfflineAlert text={this.state.offlineText} />
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList className="event-list" events={this.state.events} numberOfEvents={this.state.numberOfEvents}/>
      </div>
    );
  }
  
}

export default App;
