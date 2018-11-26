import React from 'react';
import {geolocated} from 'react-geolocated';

class Geolocation extends React.Component {
  render() {
    const geolocation = this.props.coords;
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{geolocation.latitude}</td></tr>
              <tr><td>longitude</td><td>{geolocation.longitude}</td></tr>
              <tr><td>accuracy</td><td>{geolocation.accuracy}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(Geolocation);
