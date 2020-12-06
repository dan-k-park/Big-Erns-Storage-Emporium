import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { Container, Jumbotron } from 'react-bootstrap'
import * as actions from '../actions'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  state = {
    lat: 47.9790,
    long: 122.2021,
  }

  renderMarkers() {
    // map over locations and render a marker
    this.props.locations.map(location => {
      Geocode.fromAddress(location.address).then(
        res => {
          const { lat, lng } = res.results[0].geometry.location;
          return (
            <Marker name={location.name} position={{lat: lat, lng: lng}} />
          )
        }
      )
    })

  }

  render() {
    return (
      <Jumbotron fluid>
      <Map google={this.props.google} zoom={14} initialCenter={{ lat: this.state.lat, long: this.state.long }}>
        {this.renderMarkers()}
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
      </Jumbotron>
    );
  }
}

function mapStateToProps({ locations }) {
  return { locations }
}

MapContainer = connect(
  mapStateToProps,
  actions
)(MapContainer)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAigyv3pxO6kEL0fOilxa3d9dodPrzPn2Q'
})(MapContainer)