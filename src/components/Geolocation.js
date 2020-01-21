import React from "react";
import API from "../components/API";

class Geolocation extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
    currentConditions: []
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );

    API.get(
      `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}`
    ).then(data => console.log(data));
  }

  renderContent() {}

  render() {
    //   console.log(this.state.currentConditions)
    return (
      <div>
        {/* p>{this.state.currentConditions}</p> */}
        <h2>{this.state.lat}</h2>
      </div>
    );
  }
}

export default Geolocation;
