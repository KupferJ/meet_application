import React, { Component } from 'react';
import './App.css';
import EventList from './EventList.js';
import CitySearch from './CitySearch';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen'; 


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: 'all',
    offlineText: '',
    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false: true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
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
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
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


        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
  
}

export default App;
