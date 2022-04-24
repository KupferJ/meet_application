import React, { Component } from "react";

class Event extends Component {

  state = {
    collapsed:true
  };

  handleOnClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } =this.state;
    const { event } =this.props;

    return <div className="event">
        <h3 className="summary">{event.summary}</h3>
          <div className="starting-time">
            {event.start.dateTime}
            {/* <span>
              {event.start.timeZone}
            </span> */}
            {/* <span>
              {event.end.dateTime}
            </span> */}
          </div>
          <div className="location">
            {event.location}
          </div>
          <p className="description">{event.description}</p>  

      <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleOnClick}>
        {collapsed ? "Show" : "Hide"} Details
      </button>

      {!collapsed &&
        <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
        <p className="description">{event.description}</p>
        </div>
      }
  </div>
  }
}
export default Event;