import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  state = {
    lat: 0,
    long: 0,
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{ lat: }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAigyv3pxO6kEL0fOilxa3d9dodPrzPn2Q'
})(MapContainer)